package com.cargo.challenge.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cargo.challenge.controllers.submitObj.SubmitObj;
import com.cargo.challenge.graph.Graph;
import com.cargo.challenge.graph.ScatterGraph;

@RestController
@RequestMapping("/graph")
public class GraphController {
    @GetMapping
    public Map<String, String> getGraph(@RequestParam Double tow, @RequestParam Double zfw, @RequestParam Double law,
            @RequestParam Double fwdLimit, @RequestParam Double aftLimit, @RequestParam Double toCg, @RequestParam Double zfwCg,
            @RequestParam Double ldCg) {
        SubmitObj submitObj = new SubmitObj().tow(tow).zfw(zfw).law(law).fwdLimit(fwdLimit).aftLimit(aftLimit).toCg(toCg).zfwCg(zfwCg).ldCg(ldCg);

        Map<String, String> returnMap = new HashMap<>();
        returnMap.put("graph.png", this.getGraphStr(submitObj));

        return returnMap;
    }

    @PostMapping
    public Map<String, String> getGraph(@RequestBody SubmitObj submitObj) {
        Map<String, String> returnMap = new HashMap<>();
        returnMap.put("graph.png", this.getGraphStr(submitObj));

        return returnMap;
    }

    private String getGraphStr(SubmitObj submitObj) {
        return ScatterGraph.getGraph("Weight Graph", Graph.getAllGraphs(), this.getCellsWithValue(submitObj));
    }

    private Map<String, Double> getCellsWithValue(SubmitObj submitObj) {
        Map<String, Double> cellsWithValue = new HashMap<>();
        cellsWithValue.put("W8", 46.14);
        cellsWithValue.put("W9", 26.41);
        cellsWithValue.put("W10", 28.02);
        cellsWithValue.put("W11", 57.22);
        cellsWithValue.put("W12", null);
        cellsWithValue.put("W13", null);
        cellsWithValue.put("W14", null);
        cellsWithValue.put("V8", 110677D);
        cellsWithValue.put("V9", 243805D);
        cellsWithValue.put("V10", 247343D);
        cellsWithValue.put("V11", 252650D);
        cellsWithValue.put("V12", null);
        cellsWithValue.put("V13", null);
        cellsWithValue.put("V14", null);
        cellsWithValue.put("Y8", 50.95);
        cellsWithValue.put("Y9", 72.3);
        cellsWithValue.put("Y10", 80.13);
        cellsWithValue.put("Y11", 90.15);
        cellsWithValue.put("Y12", 87.29);
        cellsWithValue.put("Y13", 76.18);
        cellsWithValue.put("Y14", 60.77);
        cellsWithValue.put("X8", 110677D);
        cellsWithValue.put("X9", 155763D);
        cellsWithValue.put("X10", 172365D);
        cellsWithValue.put("X11", 219000D);
        cellsWithValue.put("X12", 225208D);
        cellsWithValue.put("X13", 249339D);
        cellsWithValue.put("X14", 252650D);
        cellsWithValue.put("W6", 57.22);
        cellsWithValue.put("Y6", 60.77);
        cellsWithValue.put("V6", 252650D);
        cellsWithValue.put("X6", 252650D);
        cellsWithValue.put("AL8", 46.15);
        cellsWithValue.put("AL9", 35.66);
        cellsWithValue.put("AK8", 110677D);
        cellsWithValue.put("AK9", 181436D);
        cellsWithValue.put("AR8", 50.94);
        cellsWithValue.put("AR9", 71.89);
        cellsWithValue.put("AR10", 77.93);
        cellsWithValue.put("AQ8", 110677D);
        cellsWithValue.put("AQ9", 155763D);
        cellsWithValue.put("AQ10", 181436D);
        cellsWithValue.put("AX8", 41.6);
        cellsWithValue.put("AX9", 29.4);
        cellsWithValue.put("AW8", 110677D);
        cellsWithValue.put("AW9", 192776D);
        cellsWithValue.put("BD8", 55D);
        cellsWithValue.put("BD9", 76.4);
        cellsWithValue.put("BD10", 84.4);
        cellsWithValue.put("BC8", 110677D);
        cellsWithValue.put("BC9", 155763D);
        cellsWithValue.put("BC10", 192776D);
        cellsWithValue.put("TOW", submitObj.tow());
        cellsWithValue.put("ZFW", submitObj.zfw());
        cellsWithValue.put("LAW", submitObj.law());
        cellsWithValue.put("FWD_LIMIT", submitObj.fwdLimit());
        cellsWithValue.put("AFT_LIMIT", submitObj.aftLimit());
        cellsWithValue.put("TO_CG", submitObj.toCg());
        cellsWithValue.put("ZFW_CG", submitObj.zfwCg());
        cellsWithValue.put("LD_CG", submitObj.ldCg());

        return cellsWithValue;
    }
}
