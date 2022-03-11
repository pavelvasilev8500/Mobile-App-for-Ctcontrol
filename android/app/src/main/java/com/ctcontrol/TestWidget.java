package com.ctcontrol;

import android.annotation.SuppressLint;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import android.text.format.Time;
import android.widget.RemoteViews;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Calendar;
import java.util.Timer;
import java.util.TimerTask;

/**
 * Implementation of App Widget functionality.
 */

class ServerData extends AsyncTask<URL, Void, JSONArray> {

    public static JSONArray jsonArray;

    @Override
    protected void onPostExecute(JSONArray data) {
        jsonArray = data;
    }

    @Override
    protected JSONArray doInBackground(URL... urls) {
        try {
            URL url = new URL(String.format("http://192.168.0.107:4242/api/pcdata"));
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            int responseCode = connection.getResponseCode();
            BufferedReader reader = new BufferedReader(
                    new InputStreamReader(connection.getInputStream()));

            StringBuffer json = new StringBuffer(1024);
            String tmp="";
            while((tmp=reader.readLine())!=null)
                json.append(tmp).append("\n");
            reader.close();

            JSONArray data = new JSONArray(json.toString());
            //JSONObject data = new JSONObject(json.toString());
            //return data;
            //text = Integer.toString(responseCode);
            //return text;
            return data;
        } catch (Exception e) {
            return null;
        }
    }
}

public class TestWidget extends AppWidgetProvider {
    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager,
                                int appWidgetId) throws JSONException {
        new ServerData().execute();
        RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.test_widget);
        try {
            JSONArray json = ServerData.jsonArray;
            JSONObject data = json.getJSONObject(0);
            views.setTextViewText(R.id.date, data.getString("date"));
            views.setTextViewText(R.id.time, data.getString("time"));
            views.setTextViewText(R.id.day, data.getString("day"));
            views.setTextViewText(R.id.worktimetext, "Время работы");
            views.setTextViewText(R.id.worktime, data.getString("worktime"));
            views.setTextViewText(R.id.batarytext, "Заряд батареи");
            views.setTextViewText(R.id.batary, data.getString("batary"));
        }catch (Exception e){
            views.setTextViewText(R.id.date, e.toString());
        }
        appWidgetManager.updateAppWidget(appWidgetId, views);

    }

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        for (int appWidgetId : appWidgetIds) {
            try {
                updateAppWidget(context, appWidgetManager, appWidgetId);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    public void onEnabled(Context context) {
        super.onEnabled(context);
    }

    @Override
    public void onDeleted(Context context, int[] appWidgetIds) {
        super.onDeleted(context, appWidgetIds);
    }

    @Override
    public void onDisabled(Context context) {
        super.onDisabled(context);
    }
}