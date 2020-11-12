// tslint:disable:interface-name
import { createBrowserHistory } from "history";
declare global {
  interface Window {
    dataLayer: any;
  }
}
const location = '/app'
const history = createBrowserHistory({basename:location});
export default history;