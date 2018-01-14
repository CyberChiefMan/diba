<template>
  <div class="">
    <h2>مدیریت محصول</h2>
    <div class="form-group form-inline">
      <button class="btn btn-success form-control "></button>
      <input type="text" class="form-control" style="float: right">

    </div>

    <table class="table table-hover table-bordered table-striped table-responsive-lg">
      <thead>
      <tr>
        <td v-for="header in headers">{{header.title}}</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td v-for="tBody in tBodies">
          {{tBody.type}}
        </td>
        <td><button class="fa fa-pencil btn-link"></button></td>
        <td><button class="fa fa-trash btn-link " style="color: red"></button></td>
      </tr>


      </tbody>
    </table>
  </div>


</template>
<script>
  export default {
    data(){
      return{
        headers: [
          { title: 'نام محصول', value:''},
          { title: 'نام دسته اصلی', value: '' },
          { title: 'نام زیر دسته ۱', value: '' },
          { title: 'نام زیر دسته ۲', value: '' },
          { title: 'قیمت', value: '' },
          { title: 'موجودی', value: '' },
          { title: 'ویرایش', value: '' },
          { title: 'حذف', value: '' }
        ],
        tBodies:[
          {title:'',type:'text',value:''},
          {title:'',type:'text',value:''},
          {title:'',type:'text',value:''},
          {title:'',type:'text',value:''},
          {title:'',type:'float',value:''},
          {title:'',type:'text',value:''},
//        {title:'',type:'button',value:''},
//        {title:'',type:'button',value:''},


        ]
      }

    }
  }
</script>
