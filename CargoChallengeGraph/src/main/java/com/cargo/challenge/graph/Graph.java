package com.cargo.challenge.graph;

import java.awt.*;
import java.util.AbstractMap;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Accessors(fluent = true)
@Getter
@Setter
public class Graph {
    private Color color;
    private String name;
    private List<Map.Entry<String, String>> pairs;

    private static List<Map.Entry<String, String>> getGraphPairs(String[] xValues, String[] yValues) {
        List<Map.Entry<String, String>> values = new ArrayList<>();
        for(int i = 0; i < xValues.length; i++) {
            Map.Entry<String, String> value = new AbstractMap.SimpleEntry<>(xValues[i], yValues[i]);
            values.add(value);
        }

        return values;
    }
    
    public static List<Graph> getAllGraphs() {
        List<Graph> graphs = new ArrayList<>();
        // RED
        String[] envelopeTakeOffFWD_X = {"W8", "W9", "W10", "W11", "W12", "W13", "W14"};
        String[] envelopeTakeOffFWD_Y = {"V8", "V9", "V10", "V11", "V12", "V13", "V14"};
        Graph graph1 = new Graph().color(Color.RED).name("Envelope Take-Off FWD").pairs(getGraphPairs(envelopeTakeOffFWD_X, envelopeTakeOffFWD_Y));
        String[] envelopeTakeOffAFT_X = {"Y8", "Y9", "Y10", "Y11", "Y12", "Y13", "Y14"};
        String[] envelopeTakeOffAFT_Y = {"X8", "X9", "X10", "X11", "X12", "X13", "X14"};
        Graph graph2 = new Graph().color(Color.RED).name("Envelope Take-Off AFT").pairs(getGraphPairs(envelopeTakeOffAFT_X, envelopeTakeOffAFT_Y));
        String[] envelopeTakeOffMTOWLimit_X = {"W6", "Y6"};
        String[] envelopeTakeOffMTOWLimit_Y = {"V6", "X6"};
        Graph graph3 = new Graph().color(Color.RED).name("Envelope Take-Off MTOW Limit").pairs(getGraphPairs(envelopeTakeOffMTOWLimit_X, envelopeTakeOffMTOWLimit_Y));
        // ORANGE
        String[] FWD_X = {"FWD_LIMIT"};
        String[] FWD_Y = {"TOW"};
        Graph graph4 = new Graph().color(Color.ORANGE).name("FWD").pairs(getGraphPairs(FWD_X, FWD_Y));
        String[] AFT_X = {"AFT_LIMIT"};
        String[] AFT_Y = {"TOW"};
        Graph graph5 = new Graph().color(Color.YELLOW).name("AFT").pairs(getGraphPairs(AFT_X, AFT_Y));
        // BLUE
        String[] envelopeZFW_MZFW_FWD_X = {"AL8", "AL9"};
        String[] envelopeZFW_MZFW_FWD_Y = {"AK8", "AK9"};
        Graph graph6 = new Graph().color(Color.BLUE).name("Envelope ZFW MZFW FWD").pairs(getGraphPairs(envelopeZFW_MZFW_FWD_X, envelopeZFW_MZFW_FWD_Y));
        String[] envelopeZFW_MZFW_AFT_X = {"AR8", "AR9", "AR10"};
        String[] envelopeZFW_MZFW_AFT_Y = {"AQ8", "AQ9", "AQ10"};
        Graph graph7 = new Graph().color(Color.BLUE).name("Envelope ZFW MZFW AFT").pairs(getGraphPairs(envelopeZFW_MZFW_AFT_X, envelopeZFW_MZFW_AFT_Y));
        String[] envelopeZFW_MZFW_LIMIT_X = {"AL9", "AR10"};
        String[] envelopeZFW_MZFW_LIMIT_Y = {"AK9", "AQ10"};
        Graph graph8 = new Graph().color(Color.BLUE).name("Envelope ZFW MZFW LIMIT").pairs(getGraphPairs(envelopeZFW_MZFW_LIMIT_X, envelopeZFW_MZFW_LIMIT_Y));
        // GREEN
        String[] envelopeLandingForward_X = {"AX9", "AX9"};
        String[] envelopeLandingForward_Y = {"AW8", "AW9"};
        Graph graph9 = new Graph().color(Color.GREEN).name("Envelope Landing Forward").pairs(getGraphPairs(envelopeLandingForward_X, envelopeLandingForward_Y));
        String[] envelopeLandingAFT_X = {"BD8", "BD9", "BD10"};
        String[] envelopeLandingAFT_Y = {"BC8", "BC9", "BC10"};
        Graph graph10 = new Graph().color(Color.GREEN).name("Envelope Landing aft").pairs(getGraphPairs(envelopeLandingAFT_X, envelopeLandingAFT_Y));
        String[] envelopeLandingLimit_X = {"AX9", "BD10"};
        String[] envelopeLandingLimit_Y = {"AW9", "BC10"};
        Graph graph11 = new Graph().color(Color.GREEN).name("Envelope Landing Limit").pairs(getGraphPairs(envelopeLandingLimit_X, envelopeLandingLimit_Y));
        // RED DOT
        String[] maxTakeOffWeight_X = {"TO_CG"};
        String[] maxTakeOffWeight_Y = {"TOW"};
        Graph graph12 = new Graph().color(Color.RED).name("Max takeoff weight").pairs(getGraphPairs(maxTakeOffWeight_X, maxTakeOffWeight_Y));
        // BLUE DOT
        String[] zfw_CG_X = {"ZFW_CG"};
        String[] zfw_CG_Y = {"ZFW"};
        Graph graph13 = new Graph().color(Color.BLUE).name("ZFW CG").pairs(getGraphPairs(zfw_CG_X, zfw_CG_Y));
        // GREEN DOT
        String[] ldg_CG_X = {"LD_CG"};
        String[] ldg_CG_Y = {"LAW"};
        Graph graph14 = new Graph().color(Color.GREEN).name("LDG CG").pairs(getGraphPairs(ldg_CG_X, ldg_CG_Y));

        graphs.add(graph1);
        graphs.add(graph2);
        graphs.add(graph3);
        graphs.add(graph4);
        graphs.add(graph5);
        graphs.add(graph6);
        graphs.add(graph7);
        graphs.add(graph8);
        graphs.add(graph9);
        graphs.add(graph10);
        graphs.add(graph11);
        graphs.add(graph12);
        graphs.add(graph13);
        graphs.add(graph14);
        
        return graphs;
    }
}
