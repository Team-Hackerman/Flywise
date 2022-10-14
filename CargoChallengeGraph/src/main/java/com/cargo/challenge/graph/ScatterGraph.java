package com.cargo.challenge.graph;

import java.awt.*;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Map;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartUtils;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.AxisSpace;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.plot.XYPlot;
import org.jfree.chart.renderer.xy.XYLineAndShapeRenderer;
import org.jfree.data.xy.XYDataset;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ScatterGraph {
    public static String getGraph(String chartTitle, List<Graph> graphs,
            Map<String, Double> cellsWithValues) {
        JFreeChart chart = ChartFactory.createScatterPlot(chartTitle, "X-Axis", "Y-Axis",
                createDataset(graphs, cellsWithValues),
                PlotOrientation.VERTICAL, true, true, false);

        // Changes background color
        XYPlot plot = (XYPlot) chart.getPlot();
        plot.setBackgroundPaint(new Color(255, 255, 255));
        AxisSpace axisSpace = new AxisSpace();
        plot.setFixedRangeAxisSpace(axisSpace);
        plot.setFixedDomainAxisSpace(axisSpace);

        XYLineAndShapeRenderer renderer = new XYLineAndShapeRenderer();
        renderer.setSeriesLinesVisible(0, false);
        for(int i = 0; i < graphs.size(); i++) {
            renderer.setSeriesPaint(i, graphs.get(i).color());
        }
        plot.setRenderer(renderer);

        String encodedFile = "";
        try {
            byte[] sourceBytes = ChartUtils.encodeAsPNG(chart.createBufferedImage(700, 900));

            encodedFile = Base64.getEncoder().encodeToString(sourceBytes);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return encodedFile;
    }

    private static XYDataset createDataset(List<Graph> graphs, Map<String, Double> cellsWithValues) {
        final XYSeriesCollection dataset = new XYSeriesCollection();

        for (Graph graph : graphs) {
            XYSeries values = new XYSeries(graph.name(), false);

            for (Map.Entry<String, String> graphCoordinates : graph.pairs()) {
                Double xValue = cellsWithValues.get(graphCoordinates.getKey());
                Double yValue = cellsWithValues.get(graphCoordinates.getValue());

                if(null != xValue && null != yValue) {
                    values.add(xValue, yValue);
                }
            }

            dataset.addSeries(values);
        }

        return dataset;
    }
}
