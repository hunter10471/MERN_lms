import { createContext } from 'react';

export const TabContext = createContext('overview');

interface ITabContextState {
    currentTab: string;
}

interface ITabContextAction {
    type: string;
}

export function tabReducer(state: ITabContextState , action:ITabContextAction) {
    switch (action.type) {
        case 'overview':
            return {currentTab : 'overview'}
        case 'classes':
            return { currentTab : 'classes' }
        case 'messages':
            return { currentTab: 'messages' }
        case 'courses':
            return { currentTab : 'courses' }
        case 'transcripts':
            return { currentTab: 'transcripts' }
        case 'settings':
            return { currentTab : 'settings' }
        default:
            return;
    }
}