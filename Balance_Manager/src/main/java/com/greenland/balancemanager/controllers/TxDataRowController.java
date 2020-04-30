package com.greenland.balancemanager.controllers;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.greenland.balancemanager.domain.TxDataRow;

@RestController
@RequestMapping("getAllTxDataRows")
public class TxDataRowController {
	
	@GetMapping
	public List<TxDataRow> getAllTransactionRows() {

		final TxDataRow txDataRow = TxDataRow.builder().uuid(UUID.randomUUID()).txDate(LocalDate.now()).accountName("Account Name")
				.categoryName("Categopry name").created_At(LocalDate.now()).creditAmount(new BigDecimal("0"))
				.debitAmount(new BigDecimal("123.01")).isReconsiled(false).isRemote(true).build();

		
		final TxDataRow txDataRow1 = TxDataRow.builder().build();
		
		return Arrays.asList(txDataRow, txDataRow1);
		
	}

}
