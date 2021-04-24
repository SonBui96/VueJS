var app = new Vue({
    el: '#root',
    data: {
      td1:'',
      td2:'',
      tdAdd:'',
      tr:'',
      countDel:"",
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
      },
      delCount(){
        this.rowData.splice(0,this.countDel);
        this.colsData.splice(0,this.countDel);
        console.log(this.countDel);
      },
      delTable(){
        this.tableData.splice(0,this.tableData.length)
      }
    }
  })