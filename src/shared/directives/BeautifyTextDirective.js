import { beautifyText } from "./beautifyText";

const directive = {
  beforeMount: (element) => {
    element.innerText = beautifyText(element.innerText);
  },
};

export default directive;
