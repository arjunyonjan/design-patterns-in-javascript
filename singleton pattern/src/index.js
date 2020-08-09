//singleton pattern: only allow only one instance to exist in whole application
//every reference made will get the same instance

const Singleton = (() => {
  function ProcessManager() {
    this.numProcess = 0;
  }

  let pManager;

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) {
        pManager = createProcessManager();
        return pManager;
      }

      return pManager;
    }
  };
})();

const processManager = Singleton.getProcessManager();

console.log(processManager, "$$$$");

const processManager2 = Singleton.getProcessManager();

console.log(processManager2, "$$$$");

console.log(processManager === processManager2, "$$$$");
