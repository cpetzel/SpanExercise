import {createLogicMiddleware} from 'redux-logic';

import fetchDataLogic from '../models/data.logic';

const logics = [...fetchDataLogic];

const logicMiddleware = createLogicMiddleware(logics, {
    // optional dependencies such as fetch, header fields, etc.
  });

logicMiddleware.monitor$.subscribe(next => {
  const dispatchAction = next?.dispAction;
  const action = next?.action;

  if (dispatchAction?.type === 'UNHANDLED_LOGIC_ERROR') {
    const error = dispatchAction?.payload;
    if (__DEV__) {
      console.error(
        `[logic monitor] - caught unhandled error in logic ${JSON.stringify({
          logicAction: action,
        })}`,
        error,
      );
      console.reportErrorsAsExceptions = true;
      console.error(error);
      console.reportErrorsAsExceptions = false;
    } else {
      // notifyHandledError(error);
    }

    const errorFN = action?.onError;
    if (errorFN) {
      errorFN(error);
    }
  }
});

export default logicMiddleware;
