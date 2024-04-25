abcd ;
function adcd(a){
    a();
    console.log("heyyy");
}
abcd(function(){console.log("hello");})