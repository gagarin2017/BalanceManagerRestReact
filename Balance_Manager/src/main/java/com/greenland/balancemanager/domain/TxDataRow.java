package com.greenland.balancemanager.domain;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

import lombok.Builder;
import lombok.Getter;


@Builder
@Getter
public class TxDataRow {

	private UUID uuid;
	private LocalDate txDate;
	private String accountName;
	private String categoryName;
	private BigDecimal debitAmount;
	private BigDecimal creditAmount;
	private boolean isReconsiled;
	private boolean isRemote;
	private LocalDate created_At;
	private LocalDate updated_At;
	
}
