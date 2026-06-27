To help you check your website for accessibility regulations, here is a list of key requirements drawn from the **EN 301 549 V3.2.1 (2021-03) Harmonised European Standard for Accessibility requirements for ICT products and services**. This list primarily focuses on requirements for "Web Content" as outlined in Annex A of the standard, which are relevant for conforming to **Directive 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies**.

It's important to remember that requirements are self-scoping. This means that a requirement only applies if its pre-condition (the "Where ICT &lt;pre-condition>" phrase) is met. If the pre-condition is false, the requirement is not applicable to your website.

---

## Website Accessibility Requirements for Your Product Manager

Your website needs to implement the following, depending on its features and functionalities:

### 1. General Requirements for ICT (Information and Communication Technology)

These apply broadly across ICT and are relevant if your website incorporates these features:

- **Activation of Accessibility Features (5.2)**: If your website has documented accessibility features, users must be able to activate them without relying on a method that doesn't support their specific accessibility need.
- **Biometrics (5.3)**: If your website uses biological characteristics (like fingerprints, voice, or face) for user identification or control, more than one method for identification or control must be available.
- **Preservation of Accessibility Information during Conversion (5.4)**: If your website converts information or communication, it must preserve all documented non-proprietary accessibility information, as long as the destination format supports it.

---

### 2. Specific Requirements if your Website Features Two-Way Voice Communication

If your website offers features like real-time voice calls (e.g., VoIP, web conferencing), these requirements apply:

- **Audio Bandwidth for Speech (6.1)**: The system must be able to encode and decode two-way voice communication with an upper frequency limit of at least 7,000 Hz for good audio quality.
- **Real-Time Text (RTT) Functionality**
    - **RTT Provision (6.2.1.1)**: If two-way voice communication is provided, the website must also provide two-way RTT communication, unless it requires adding physical input/output hardware.
    - **Concurrent Voice and Text (6.2.1.2)**: It must allow concurrent use of voice and RTT through a single user connection.
    - **Visually Distinguishable Display (6.2.2.1)**: Displayed sent RTT text must be visually differentiated and separated from received RTT text.
    - **Programmatically Determinable Send and Receive Direction (6.2.2.2)**: The send/receive direction of RTT text must be programmatically determinable (if the RTT functionality is 'open').
    - **Speaker Identification (6.2.2.3)**: If voice communication provides speaker identification, RTT communication must also provide speaker identification.
    - **Visual Indicator of Audio with RTT (6.2.2.4)**: A real-time visual indicator of audio activity must be provided on the display.
    - **Interoperability (6.2.3)**: RTT functionality must support specified interoperability mechanisms, including those for Public Switched Telephone Network (PSTN), Voice Over IP (VOIP) with Session Initiation Protocol (SIP), and other relevant common specifications or new RTT standards.
    - **RTT Responsiveness (6.2.4)**: RTT input must be transmitted within 500 ms of the smallest reliably composed unit of text entry being available.
- **Caller ID (6.3)**: If caller identification or similar telecommunications functions are provided, they must be available in text form and be programmatically determinable (unless it's closed functionality).
- **Alternatives to Voice-Based Services (6.4)**: If your website provides real-time voice-based communication with services like voicemail or auto-attendants, it must offer users a means to access information and carry out tasks without needing to use hearing or speech.
- **Video Communication (if real-time video functionality is included)**:
    - **Resolution (6.5.2 a)**: Must support at least QVGA (320 x 240) resolution.
    - **Frame Rate (6.5.3 a)**: Must support a frame rate of at least 20 Frames Per Second (FPS).
    - **Synchronization (6.5.4)**: There must be a maximum time difference of 100 ms between the speech and video presented to the user.
    - **Visual Indicator of Audio (6.5.5)**: A real-time visual indicator of audio activity must be provided.
    - **Speaker Identification for Sign Language (6.5.6)**: If speaker identification is provided for voice users, it must also be provided for real-time signing and sign language users once signing has been indicated.

---

### 3. Specific Requirements if your Website Displays Video Content

If your website includes video with synchronized audio, these requirements apply:

- **Caption Processing Technology**
    - **Captioning Playback (7.1.1)**: There must be a mode of operation to display available captions, and if closed captions are provided, the user must be able to choose to display them.
    - **Captioning Synchronization (7.1.2)**: The mechanism for displaying captions must preserve synchronization within a tenth of a second of the caption's timestamp or availability.
    - **Preservation of Captioning (7.1.3)**: Caption data must be preserved when video with synchronized audio is transmitted, converted, or recorded.
    - **Captions Characteristics (7.1.4)**: Users must be able to adapt the displayed characteristics of captions (e.g., background/foreground colour, font type, size, opacity), unless they are unmodifiable characters.
    - **Spoken Subtitles (7.1.5)**: A mode of operation to provide a spoken output of available captions must be provided, unless the caption content is not programmatically determinable.
- **Audio Description Technology**
    - **Audio Description Playback (7.2.1)**: A mechanism to select and play available audio description to the default audio channel must be provided. If explicit mechanisms are absent, enabling selection and playback of multiple audio tracks is sufficient.
    - **Audio Description Synchronization (7.2.2)**: The synchronization between audiovisual content and corresponding audio description must be preserved.
    - **Preservation of Audio Description (7.2.3)**: Audio description data must be preserved when video with synchronized audio is transmitted, converted, or recorded.
- **User Controls for Captions and Audio Description (7.3)**: User controls to activate subtitling and audio description must be provided at the same level of interaction as the primary media controls.

---

### 4. Core Web Content Requirements (WCAG 2.1 Level AA)

These are directly tied to the **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA**, which your website shall satisfy.

- **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.
    - **Non-text Content (9.1.1.1)**: All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.
    - **Audio-only and Video-only (Pre-recorded) (9.1.2.1)**: Equivalent alternatives are provided for time-based media.
    - **Captions (Pre-recorded) (9.1.2.2)**: Captions are provided for all pre-recorded audio content in synchronized media.
    - **Audio Description or Media Alternative (Pre-recorded) (9.1.2.3)**: Audio description or a media alternative for time-based media is provided for all pre-recorded video content in synchronized media.
    - **Audio Description (Pre-recorded) (9.1.2.5)**: Audio description is provided for all pre-recorded video content in synchronized media.
    - **[[Info and Relationships (9.1.3.1) && Meaningful Sequence (9.1.3.2) | Info and Relationships (9.1.3.1)]]**: Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
    - **[[Info and Relationships (9.1.3.1) && Meaningful Sequence (9.1.3.2) | Meaningful Sequence (9.1.3.2)]]**: When the sequence of content affects its meaning, a correct reading sequence can be programmatically determined.
    - **Sensory Characteristics (9.1.3.3)**: Instructions do not rely solely on sensory characteristics (e.g., shape, size, visual location, orientation, or sound).
    - **Orientation (9.1.3.4)**: Content does not restrict its view and operation to a single display orientation (e.g., portrait or landscape) unless a specific display orientation is essential.
    - **Identify Input Purpose (9.1.3.5)**: The purpose of input fields collecting information about the user can be programmatically determined.
    - **Use of Color (9.1.4.1)**: Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
    - **Audio Control (9.1.4.2)**: If any audio plays automatically for more than 3 seconds, a mechanism to pause or stop it, or control its volume independently of the system volume, is available.
    - **Contrast (Minimum) (9.1.4.3)**: Visual presentation of text and images of text has a contrast ratio of at least 4.5:1, with specific exceptions.
    - **Resize Text (9.1.4.4)**: Text can be resized without assistive technology up to 200 percent without loss of content or functionality.
    - **Images of Text (9.1.4.5)**: Images of text are only used for pure decoration, or when the text is not essential to the information, or when the text can be visually customized by the user.
    - **Reflow (9.1.4.10)**: Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for vertical or horizontal scrolling content, with exceptions.
    - **Non-text Contrast (9.1.4.11)**: The visual presentation of the following has a contrast ratio of at least 3:1 against adjacent colors: User Interface Components, Graphical Objects, and parts of images that are essential for understanding the content.
    - **Text Spacing (9.1.4.12)**: Without loss of content or functionality, all the following can be overridden without requiring changes to other style properties: Line height, Paragraph spacing, Letter spacing, and Word spacing.
    - **Content on Hover or Focus (9.1.4.13)**: For content that appears on hover or focus, specific dismissal, hoverable, and persistent conditions are met.
- **Operable**: User interface components and navigation must be operable.
    - **Keyboard (9.2.1.1)**: All functionality is operable through a keyboard interface without requiring specific timings for individual keystrokes.
    - **No Keyboard Trap (9.2.1.2)**: If keyboard focus can be moved to a component, it can be moved away from that component using only a keyboard interface.
    - **Character Key Shortcuts (9.2.1.4)**: If character key shortcuts are implemented, at least one of the following is true: Turn off, Remap, or Active only on focus.
    - **Timing Adjustable (9.2.2.1)**: For time limits set by the website, users are allowed to turn off, adjust, or extend them, with exceptions.
    - **Pause, Stop, Hide (9.2.2.2)**: Mechanisms are available to pause, stop, or hide moving, blinking, scrolling, or auto-updating information.
    - **Three Flashes or Below Threshold (9.2.3.1)**: Content does not contain anything that flashes more than three times in any one-second period, or the flash is below thresholds.
    - **Bypass Blocks (9.2.4.1)**: A mechanism is provided to bypass blocks of content that are repeated on multiple web pages.
    - **Page Titled (9.2.4.2)**: Web pages have titles that describe topic or purpose.
    - **Focus Order (9.2.4.3)**: If a web page can be navigated sequentially, focusable components receive focus in an order that preserves meaning and operability.
    - **Link Purpose (In Context) (9.2.4.4)**: The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context.
    - **Multiple Ways (9.2.4.5)**: More than one way is available to locate a web page within a set of web pages, unless the web page is the result of, or a step in, a process.
    - **Headings and Labels (9.2.4.6)**: Headings and labels describe topic or purpose.
    - **Focus Visible (9.2.4.7)**: Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
    - **Pointer Gestures (9.2.5.1)**: All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless the gesture is essential.
    - **Pointer Cancellation (9.2.5.2)**: For functionality that can be operated using a single pointer, at least one of the following is true: No Down-Event, Abort or Undo, or Essential.
    - **Label in Name (9.2.5.3)**: For user interface components with labels that include text or images of text, the accessible name contains the text presented in the visual label.
    - **Motion Actuation (9.2.5.4)**: Functionality that can be operated by motion actuation can also be operated by user interface components, and disabling the motion actuation is available, unless the motion is essential.
- **Understandable**: Information and the operation of user interface must be understandable.
    - **Language of Page (9.3.1.1)**: The default human language of each web page can be programmatically determined.
    - **Language of Parts (9.3.1.2)**: The human language of each passage or phrase in the content can be programmatically determined.
    - **On Focus (9.3.2.1)**: Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.
    - **On Input (9.3.2.2)**: Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.
    - **Consistent Navigation (9.3.2.3)**: Navigational mechanisms that are repeated on multiple web pages within a set of web pages occur in the same relative order each time they are repeated.
    - **Consistent Identification (9.3.2.4)**: Components that have the same functionality within a set of web pages are identified consistently.
    - **Error Identification (9.3.3.1)**: If an input error is automatically detected, the item in error is identified and the error is described to the user in text.
    - **Labels or Instructions (9.3.3.2)**: Labels or instructions are provided when content requires user input.
    - **Error Suggestion (9.3.3.3)**: If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.
    - **Error Prevention (Legal, Financial, Data) (9.3.3.4)**: For web pages that cause legal commitments, financial transactions, modify/delete user data, or submit user test responses, at least one of the following is true: submissions are reversible, data is checked for errors, or confirmation mechanism is available.
- **Robust**: Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.
    - **Parsing (9.4.1.1)**: For markup languages, elements have complete start/end tags, are nested correctly, do not contain duplicate attributes, and IDs are unique, where specifications allow.
    - **Name, Role, Value (9.4.1.2)**: For all user interface components, the name and role can be programmatically determined; states, properties, and values can be programmatically set; and notification of changes is available to user agents.
    - **Status Messages (9.4.1.3)**: Status messages can be programmatically determined through role or properties such that assistive technologies can notify users of their presence without receiving focus.
- **WCAG Conformance Requirements (9.6)**: Your website must satisfy all five WCAG 2.1 conformance requirements at Level AA:
    1. **Conformance Level**: All content on the website must conform to WCAG 2.1 Level AA.
    2. **Full Pages**: Conformance applies to full web pages.
    3. **Complete Processes**: If a web page is part of a series of web pages presenting a complete process (e.g., checkout), all web pages in that process must conform.
    4. **Only Accessibility-Supported Ways of Using Technologies**: Only technologies that are "accessibility-supported" (meaning they work with assistive technologies) can be relied upon.
    5. **Non-Interference**: Content must not disrupt the accessibility of user agents or assistive technologies.

---

### 5. Requirements for Downloadable Documents and Forms

If your website provides downloadable documents and forms (e.g., PDF files, spreadsheets), they must conform to requirements similar to WCAG 2.1 Level AA applied to non-web documents (Clause 10). This includes ensuring:

- **Perceivable**: Text alternatives for non-text content, captions and audio descriptions for time-based media, meaningful structure and relationships, and distinguishable content (e.g., adequate contrast, no reliance on color alone, text resizing, reflow).
- **Operable**: Keyboard accessibility, no keyboard traps, timing adjustments, ability to pause/stop/hide moving content, minimal flashing, clear document titles, logical focus order, clear link purposes, headings, and visible focus.
- **Understandable**: Programmatically determinable language of the document and its parts, predictable behavior on focus and input, and robust input assistance (e.g., error identification, labels/instructions, error suggestions, error prevention for sensitive data).
- **Robust**: Correct parsing for markup languages and programmatically determinable name, role, and value for user interface components.

---

### 6. Requirements for Product Documentation and Support Services

If your website includes product documentation or links to support services:

- **Accessibility and Compatibility Features (12.1.1)**: Product documentation must list and explain how to use the accessibility and compatibility features of the ICT.
- **Accessible Documentation (12.1.2)**: Product documentation provided in electronic format must be available in a web format conforming to Clause 9 or a non-web format conforming to Clause 10.
- **Information on Accessibility and Compatibility Features (12.2.2)**: Support services must provide information on the accessibility and compatibility features mentioned in the product documentation.
- **Effective Communication (12.2.3)**: Support services must accommodate the communication needs of individuals with disabilities, either directly or through a referral.
- **Accessible Documentation (12.2.4)**: Documentation provided by support services must be available in a web format conforming to Clause 9 or a non-web format conforming to Clause 10.

---

This list outlines the essential accessibility requirements for your website according to the EN 301 549 standard, particularly in the context of the European Web Accessibility Directive. For detailed testing procedures, refer to Annex C of the standard.