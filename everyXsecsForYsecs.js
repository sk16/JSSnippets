/* Write a function everyXsecsForYsecs that will accept three arguments: a function, an interval time in seconds, and a total time in seconds. everyXsecsForYsecs should invoke the given function every X times 1000 milliseconds, but then stop invoking the function after Y times 1000 milliseconds.
Write function sayHowdy that will log "Howdy" to the console. Then test your everyXsecsForYsecs function by using it to invoke sayHowdy every 1 second for 5 seconds.
Now, modify your everyXsecsForYsecs function so it does not use setInterval, but still keeps the same functionality. */

const everyXsecsForYsecs = (func, interval, totalTime) => {
  
    setTimeout(() => {
      if(totalTime >= interval) {
        everyXsecsForYsecs(func, interval, totalTime - interval);
        return func();
      }
    }, interval);
  };
  
/*   const sayHello = () => {
    console.log("Hello World!!!");
  }
  everyXsecsForYsecs(sayHello, 1000, 8500); */