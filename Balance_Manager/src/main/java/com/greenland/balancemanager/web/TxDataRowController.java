package com.greenland.balancemanager.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.greenland.balancemanager.domain.TxDataRow;
import com.greenland.balancemanager.services.TxDataRowService;

@RestController
@RequestMapping("/api/txDataRow")
@CrossOrigin(origins = "http://localhost:3000")
public class TxDataRowController {
	
	@Autowired
	private TxDataRowService txDataRowService;

	@GetMapping("/all")
	public Iterable<TxDataRow> getAllProjects() {
		return txDataRowService.getAllTxDataRows();
	}
}
