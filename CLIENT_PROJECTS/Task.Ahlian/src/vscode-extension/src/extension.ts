import * as vscode from 'vscode';
import http from 'http';

/**
 * Task.Ahlian VSCode Hook
 * Entry point for the extension.
 */
export function activate(context: vscode.ExtensionContext) {
    console.log('Task.Ahlian: Extension Activated.');

    // 1. Monitor Selection (Marcus can highlight text in chat to "Task it")
    let syncCommand = vscode.commands.registerCommand('task-ahlian.syncChat', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('Open a chat or file to sync a task.');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        if (!text) {
            vscode.window.showWarningMessage('Please highlight a task from the chat first!');
            return;
        }

        // 2. Mock AI Extraction (We'll wire to Anthropic in Phase 3)
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Task.Ahlian: Thinking...",
            cancellable: false
        }, async (progress) => {
            progress.report({ message: "Syncing task to dashboard..." });
            
            try {
                await syncTaskToDashboard(text);
                vscode.window.showInformationMessage(`✅ Ahlian: Task synced successfully!`);
            } catch (err: any) {
                vscode.window.showErrorMessage(`❌ Ahlian: Error syncing! ${err.message}`);
            }
        });
    });

    context.subscriptions.push(syncCommand);
}

/**
 * Sends a task to the live dashboard API.
 */
async function syncTaskToDashboard(rawText: string) {
    const config = vscode.workspace.getConfiguration('taskAhlian');
    const apiUrl = config.get<string>('apiUrl')?.replace('/tasks', '/extract') || 'http://localhost:3000/api/extract';

    const data = JSON.stringify({
        text: rawText
    });

    return new Promise((resolve, reject) => {
        const url = new URL(apiUrl);
        const options = {
            hostname: url.hostname,
            port: url.port || 80,
            path: url.pathname,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = http.request(options, (res) => {
            if (res.statusCode === 201 || res.statusCode === 200) {
                resolve(true);
            } else {
                reject(new Error(`API responded with ${res.statusCode}`));
            }
        });

        req.on('error', (e) => reject(e));
        req.write(data);
        req.end();
    });
}

export function deactivate() {}
