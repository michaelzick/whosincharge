import React from "react";

export const ifsDescription = (
  <>
    <p>
      Internal Family Systems (IFS) is a psychotherapy approach developed by Richard C. Schwartz in the 1980s. The model views the mind as an inner family made up of distinct “parts,” each with its own perspective and feelings. These parts interact with one another much like family members, sometimes cooperating and sometimes competing for control of the person’s behavior.
    </p>
    <p>
      IFS groups parts into categories based on how they try to protect us. “Managers” work to keep daily life functioning smoothly and prevent painful emotions from surfacing. When distress does break through, “Firefighters” leap in to douse the intensity, often through impulsive or distracting behaviors. Hidden beneath these protectors are “Exiles,” vulnerable parts that carry burdens of trauma, shame, or fear.
    </p>
    <p>
      At the heart of the system is the Self—a calm, compassionate state that embodies curiosity, confidence, and clarity. Therapy aims to help individuals access this Self so it can lead the internal family. When the Self is in charge, protective parts can relax and wounded parts can release the burdens they carry.
    </p>
    <p>
      IFS therapy involves “unblending” from strong emotions, listening to each part’s positive intent, and fostering a trusting relationship between the Self and the parts. By doing so, people often experience more inner harmony and relief from symptoms related to trauma, anxiety, and other mental health concerns. The approach has grown beyond its clinical roots and is now applied in coaching, spirituality, and personal growth contexts.
    </p>
  </>
);

export const instructions = (
  <>
    <p>
      Select a part below to open a journal modal and write what that part is feeling or wanting to say.
      It's best to write freely without worrying about form or content, and write more from your heart than with your head.
    </p>
    <p>Visit the Parts Info page to read about each part and review your writing in Journal Entries. Your entries are organized by date.</p>
  </>
);

export const disclaimerText = (
  <>
    <p>
      For maximum privacy, none of your journal entries are stored in the cloud. The data stays in your browser's Local Storage, which means that your entries will not transfer from one browser to the next. If you use an Incognito or private window and close it, or delete your Local Storage, you WILL LOSE YOUR ENTRIES!
    </p>
    <p>
      It is recommended that you use this site on a device that only you can access. You can find your entries in Local Storage &gt; ifs-journal-entries in your browser. If you wish to save, edit, or delete your entries, you can do so there.
    </p>
  </>
);

export const disclaimerModalText = (
  <>
    {disclaimerText}
    <p>Click "Acknowledge" to hide this message in the future.</p>
  </>
);
