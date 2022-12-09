import { ExtensionContext } from 'vscode';

import { getRootPath } from './lib/helpers';
import { registerCommands } from './lib/commands';
import { registerEvents } from './lib/events';
import { registerURIHandler } from './lib/uri';
import { initializeStatusBar } from './lib/statusBar';
import { initializeProviders } from './lib/providers';
import { initializeConfig } from './lib/auth';
import { initializeTerminal } from './lib/terminal';
import { initializeTracking, trackEvent } from './lib/tracking';
import { TRACKED_EVENTS } from './lib/constants';

export const activate = async (context: ExtensionContext) => {
  await trackEvent(TRACKED_EVENTS.ACTIVATE);
  console.log(
    'Activating Extension Version: ',
    // @ts-ignore TODO - Why is extension not available, when it is?
    context.extension.packageJSON.version
  );
  const rootPath = getRootPath();

  registerCommands(context);
  registerEvents(context);
  registerURIHandler(context, rootPath);

  initializeProviders(context);
  initializeTerminal(context);
  initializeStatusBar(context);
  initializeTracking(context);

  initializeConfig(rootPath);
};
