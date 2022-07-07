package com.nativescript.label.demo;

import android.os.Bundle;
import android.text.Spannable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.widget.AppCompatTextView;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.nativescript.label.EllipsizingTextView;
import com.nativescript.label.Font;

public class FirstFragment extends Fragment {
    final String TAG = "FirstFragment";
    @Override
    public View onCreateView(
            LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState
    ) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_first, container, false);
    }

    public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        view.findViewById(R.id.button_first).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                long startTime = System.nanoTime();
                Log.d(TAG, "creating EllipsizingTextView ");
                TextView textView = new EllipsizingTextView(getContext());
                Log.d(TAG, "EllipsizingTextView creation: " + ((System.nanoTime() - startTime)/1000000) + "ms");
                startTime = System.nanoTime();
                Log.d(TAG, "creating Button ");
                TextView button = new Button(getContext());
                Log.d(TAG, "Button creation: " + ((System.nanoTime() - startTime)/1000000) + "ms");
            }
        });



        long startTime = System.nanoTime();
        Spannable text = Font.stringBuilderFromHtmlString(getContext(), "", "<span style=\"font-size:15px; color:#aaaa00;\">12/06</span><br><span style=\"font-size:35px; color:#aa00aa;\">12/05</span>");
        Log.d(TAG, "stringBuilderFromHtmlString: " + ((System.nanoTime() - startTime)/1000000) + "ms");
        ((TextView)view.findViewById(R.id.textview_first)).setText(text);
    }
}
