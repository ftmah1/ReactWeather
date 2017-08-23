/*function getTempPromise(location){
  return new Promise(function(resolve, reject){
    resolve(79);
    reject('City not found');
  });
}


getTempPromise('kl').then(function(temp){
  console.log('promise success', temp);
}, function (err){
  console.log('pomise error', err);
})*/


function addPromise(a,b){
  return new Promise(function (resolve, reject){
    if (typeof a ==='number' && typeof b ==='number'){
      resolve(a+b);
    }else{
      reject('Arguments must be number');
    }
  });
}


addPromise(2,'kl').then(function(sum){
  console.log('success',sum)
}, function(err){
    console.log('error',err);
});
