//creational pattern and limit the creation of objects to atmost 1;


function Process(state){
  this.state = state;
}

const SingleTon = (function (){
  function ProcessManager(){
    this.numProcess = 0;
  }
  let pManager;
  function createProcessManager(){
    pManager = new ProcessManager();
    return pManager;
  }
  return {
    getProcessManager : () => {
      if(!pManager){
        return createProcessManager();
      }
      return pManager;
    }
  }
})()

const process1 = SingleTon.getProcessManager();
const process2 = SingleTon.getProcessManager();

console.log(process1 === process2);

