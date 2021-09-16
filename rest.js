function  moreArgu() {
    
  for(var i = 0; i < arguments.length ; i++){

    console.log('more argument passes ' +arguments[i] );
  }
}
moreArgu('atik','tarek','anonna');
// arrow function e kintu arguments kaj korbe na.. eita sudhu es5 er jonno

//argumentsঅবজেক্ট ঠিক অ্যারে না হওয়ায় এখানে আপনি চাইলে 
//forEach, map, filter, reduceবা এরকম বাকী যত মেথড আছে 
//সেগুলো কাজ করাতে পারবেন নাঃ