package com.ctcontrol;

import android.app.Service;
import android.appwidget.AppWidgetManager;
import android.content.ComponentName;
import android.content.Intent;
import android.os.IBinder;
import android.widget.RemoteViews;
import java.text.DateFormat;
import java.util.Date;

public class UpdateService extends Service {
    public UpdateService() { }

    @Override
    public void onCreate() {
        super.onCreate();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        buildUpdate();
        return super.onStartCommand(intent, flags, startId);
    }

    private void buildUpdate(){
        String lastUpdated = DateFormat.getDateTimeInstance().format(new Date().toString());
        RemoteViews view = new RemoteViews(getPackageName(), R.layout.test_widget);
        view.setTextViewText(R.id.worktimetext, lastUpdated);

        ComponentName thisWidget = new ComponentName(this, TestWidget.class);
        AppWidgetManager manager = AppWidgetManager.getInstance(this);
        manager.updateAppWidget(thisWidget, view);
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
