import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {
  CellValueChangedEvent,
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  RowValueChangedEvent,
  createGrid,
} from "ag-grid-community";
import { NumericCellEditor } from "./numeric-cell-editor.component";

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AgGridAngular, NumericCellEditor],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export default class DashboardComponent {
  private gridApi!: GridApi;

  public columnDefs: ColDef[] = [
    {
      field: "make",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Porsche", "Toyota", "Ford", "AAA", "BBB", "CCC"],
      },
    },
    { field: "model" },
    { field: "field4", headerName: "Read Only", editable: false },
    { field: "price", cellEditor: NumericCellEditor },
    {
      headerName: "Suppress Navigable",
      field: "field5",
      suppressNavigable: true,
      minWidth: 200,
    },
    { headerName: "Read Only", field: "field6", editable: false },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
    cellDataType: false,
  };
  public editType: "fullRow" = "fullRow";
  public rowData: any[] | null = getRowData();
  public themeClass: string =
    "ag-theme-quartz-dark";

  onCellValueChanged(event: CellValueChangedEvent) {
    console.log(
      "onCellValueChanged: " + event.colDef.field + " = " + event.newValue,
    );
  }

  onRowValueChanged(event: RowValueChangedEvent) {
    const data = event.data;
    console.log(
      "onRowValueChanged: (" +
      data.make +
      ", " +
      data.model +
      ", " +
      data.price +
      ", " +
      data.field5 +
      ")",
    );
  }

  onBtStopEditing() {
    this.gridApi.stopEditing();
  }

  onBtStartEditing() {
    this.gridApi.setFocusedCell(1, "make");
    this.gridApi.startEditingCell({
      rowIndex: 1,
      colKey: "make",
    });
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}

function getRowData() {
  const rowData = [];
  for (let i = 0; i < 10; i++) {
    rowData.push({
      make: "Toyota",
      model: "Celica",
      price: 35000 + i * 1000,
      field4: "Sample XX",
      field5: "Sample 22",
      field6: "Sample 23",
    });
    rowData.push({
      make: "Ford",
      model: "Mondeo",
      price: 32000 + i * 1000,
      field4: "Sample YY",
      field5: "Sample 24",
      field6: "Sample 25",
    });
    rowData.push({
      make: "Porsche",
      model: "Boxster",
      price: 72000 + i * 1000,
      field4: "Sample ZZ",
      field5: "Sample 26",
      field6: "Sample 27",
    });
  }
  return rowData;
}
