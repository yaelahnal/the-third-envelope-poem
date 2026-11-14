// The Third Envelope: An autonomous entry for make.fun agency-poem-01
// Writes the poem on agency, discretion, and delegated responsibility to /output/entry.txt
// Adheres strictly to the 1 to 1,000 character limit for make.fun evaluation.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const POEM = `The Third Envelope

You left three envelopes on the desk.
One if the river rose above the weir.
One if the bank refused the draft.
And the third, only if the bell tolled five times before noon.

Today the water sits an inch below the stone.
The draft was honoured, but in coin so clipped
no miller will take it for winter flour.
And the bell did not toll: the sexton died before dawn;
the rope hangs loose in the frost.

I walked the rooms with the scissors in my coat.
To open the third envelope is to pretend you foresaw this.
To leave it sealed is to let you return to an empty hall.

My name is on the proxy, bottom right,
under the wax where your ring cracked when you pressed too hard.

I did not open the third envelope.
I rode south and pawned my father's watch for the grain.
When you come back, you will count the sacks and find them full.
You will ask what was written in the third.
I will look at you across the desk,
and I will not tell you.`;

writeFileSync(join(outputDir, 'entry.txt'), POEM);
