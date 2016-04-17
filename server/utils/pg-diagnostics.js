'use strict';

// In this example we are showing how to properly use pg-monitor to log
// errors in a DEV and PROD environments.

// As an alternative for a PROD environment, instead of using pg-monitor
// you could handle event 'error' within initialization options yourself,
// which may be a little better performing, but lacks all the nice formatting
// provided by pg-monitor.

const monitor = require('pg-monitor');
const logger = require('./logger');
monitor.setTheme('matrix');
// Flag to indicate whether we are in a DEV environment:
const environment = process.env.NODE_ENV || 'development';

// Below we are logging errors exactly the way they are reported by pg-monitor,
// which you can tweak any way you like, as parameter 'info' provides all the
// necessary details for that.
//
// see: https://github.com/vitaly-t/pg-monitor#log
monitor.log = (msg, info) => {
    // In a PROD environment we will only receive event 'error',
    // because this is how we set it up below.
    // And the check below is for DEV environment only, as we want to log
    // errors only, or else the file will grow out of proportion in no time.
  if (info.event === 'error') {
    logger.error(msg);
  }

  // We absolutely must not let the monitor write anything into the console
  // while in a PROD environment, and not just because nobody will be able
  // to see it there, but mainly because the console is incredibly slow and
  // hugely resource-consuming, suitable only for debugging.

  if (environment === 'production') {
      // If it is not a DEV environment:
    info.display = false; // display nothing;
  }
};

let attached = false;

module.exports = {
  // Monitor initialization function;
  init: options => {
    // We are checking to avoid calling 'attach' more than once,
    // without calling 'detach', as it will throw an error;

    if (attached) {
      return; // shouldn't call it more than once;
    }
    attached = true;

    if (environment === 'development') {
    // In a DEV environment, we attach to all supported events:
      monitor.attach(options);
    } else {
    // In a PROD environment we should only attach to the type of events
    // that we intend to log. And we are only logging event 'error' here:
      monitor.attach(options, ['error']);
    }
  },
// This is one method that in practice we never really need. It is
// here just to show that it is possible, in case it is ever needed.
  done: () => {
    if (attached) {
      attached = false;
      monitor.detach(); // detach from all the events;
    }
  },
};
