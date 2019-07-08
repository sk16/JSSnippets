
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);
Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});
console.log('script end');


/* Naive Output without knowledge of microtask queue: 
    script start
    script end
    setTimeout
    promise1
    promise2

Actual Output:
    script start
    script end
    promise1
    promise2
    setTimeout
        
Important points are:
* Tasks are taken from the Task Queue.
* Task from the Task Queue is a Macrotask != a Microtask.
* Microtasks are processed when the current task ends and the microtask queue is cleared before the next macrotask cycle. In above example promise fullfillment callbacks are microtask.
* Microtasks can enqueue other microtasks. All are executed before the next task inline.
* UI rendering is run after all microtasks execution.

Above points can be codified as below:  

NOTE: Below algorithm represents a rough outline for eventloop.
*/

function eventLoop() {
    while (eventLoop.waitForTask()) {
        const taskQueue = eventLoop.selectTaskQueue();
        const microtaskQueue = eventLoop.selectMicroTaskQueue();
    
        // First: "A task" from the Task queue is executed
        if (taskQueue.hasNextTask()) {
            taskQueue.processNextTask()
        }
        
        // Second: "ALL the tasks" in the Micro task queue are executed
        while (microtaskQueue.hasNextMicrotask()) {
            microtaskQueue.processNextMicrotask()
        }
        
        // Third: It will check if there is someting to render
        // eg. DOM changes, request animation frame etc and renders in browser if required
        if (eventLoop.needsRendering()){
            eventLoop.render();
        }
    }
}



/* References:
* https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
* https://blog.bitsrc.io/microtask-and-macrotask-a-hands-on-approach-5d77050e2168
 */