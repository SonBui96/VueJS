var app = new Vue({
    el: '#root',
    data: {
      td1:'',
      td2:'',
      tdAdd:'',
      tr:'',
      tableData:[],
      rowData:[],
      colsData:[]
    },
    methods:{
      addTable(){
        var my_object = {
          td1:this.td1,
          td2:this.td2,
        };
        this.tableData.push(my_object)
        this.td1 = '';
        this.td2 = '';
      },

      addRow(){
        this.rowData.push(this.tr);
      },
      addCols(){
        this.colsData.push(this.td1);
      }
    }
  })