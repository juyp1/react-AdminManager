export default {
  formateDate(timer) {
    if(!timer) return;
    let date = new Date(timer);
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
  }
}