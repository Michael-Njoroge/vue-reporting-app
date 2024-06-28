<template>
   <div class = "report">
      <h1 class = "report-heading"> Report </h1>
      <!-- Creating the table -->
      <table class = "report-table">
         <thead>
            <tr>
               <th> User ID </th>
               <th> ID </th>
               <th> Title </th>
               <th> Body </th>
            </tr>
         </thead>
         <tbody>
            <!-- Iterating through the reports and showing every report one by one -->
            <tr v-for = "report in state.reports" :key = "report.id">
               <td> {{ report.userId }} </td>
               <td> {{ report.id }} </td>
               <td> {{ report.title }} </td>
               <td> {{ report.body }} </td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
<script>
   import { reactive, onMounted } from "vue";
   import axios from "axios";
   export default {
      setup() {
         // using the composition API
         const state = reactive({
            reports: [],
         });
         // fetching data on the mount, and storing response in the reports array
         onMounted(() => {
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
            state.reports = response.data;
            })
            .catch((error) => {
               console.log(error);
            });
         });
         return { state };
      },
   };
</script>
<style>
   /* Styling the table */
   .report {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
      color: #333;
   }
   .report-heading {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
   }
   .report-table {
      width: 100%;
      border-collapse: collapse;
   }
   .report-table th {
      background-color: #333;
      color: #fff;
      padding: 10px;
      text-align: left;
      font-size: 18px;
   }
   .report-table td {
      background-color: #f5f5f5;
      padding: 10px;
      font-size: 16px;
   }
   .report-table tr:hover {
      background-color: #ddd;
   }
</style>