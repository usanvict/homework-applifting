# Accessibility test report for Applifting.io

Date: October 2, 2024

Webpage: https://applifting.io/

Tools used: NVDA Screen Reader 2024.3.1

Source of info: https://www.w3.org/WAI/standards-guidelines/wcag/

Contrast checker: https://webaim.org/resources/contrastchecker/

## Summary

This report focuses on accessibility of https://applifting.io/ which is complaint with Web Content Accessibility Guidelines (WCAG) 2.2 for level A, which is the minimum level.

## Scope

Page tested: homepage of https://applifting.io/ 

User group targeted: people with visual impairments

## Guidelines and compliance

### Guideline 1.1 – Text Alternatives
Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.

Issue: images on the webpage do not have `alt` descriptions, so screen readers do not provide any information when hovering over project pictures.

Recommendation: add meaningful `alt` attributes to all images to ensure screen readers can describe the content accurately.

### Guideline 1.2 – Time-based Media

Provide alternatives for time-based media.

Not applicable: the YouTube video on the site contains no speech or audio cues, so captions or transcripts are not required.

### Guideline 1.3 – Adaptable

Create content that can be presented in different ways (for example simpler layout) without losing information or structure.

Observation: the webpage is easy to navigate through.

### Guideline 1.4 – Distinguishable

Make it easier for users to see and hear content including separating foreground from background.

Observation: based on contrast testing, the colors used for text and background meet accessibility standards, ensuring legibility for users with visual impairments [source: Contrast checker].

### Guideline 2.1 – Keyboard Accessible

Make all functionality available from a keyboard.

Observation: all interactive elements on the site, such as buttons and links, can be accessed and navigated through keyboard-only controls.

### Guideline 2.2 – Enough Time

Provide users enough time to read and use content.

Not applicable: no content on the page requires time-sensitive actions or interactions, so no special timing considerations are needed.

### Guideline 2.3 – Seizures and Physical Reactions

Do not design content in a way that is known to cause seizures or physical reactions.

Not applicable: the website does not contain flashing elements or animations that could induce seizures or physical discomfort.

### Guideline 2.4 – Navigable

Provide ways to help users navigate, find content, and determine where they are.

Observation: the webpage includes a clear title, intuitive navigation, and well-labeled links, providing users with a straightforward browsing experience.

### Guideline 2.5 – Input Modalities

Make it easier for users to operate functionality through various inputs beyond keyboard.

Observation: mouse interaction with the website functions smoothly, allowing users to easily interact with content.

### Guideline 3.1 – Readable

Make text content readable and understandable.

Observation: the webpage uses appropriate HTML language tags (`lang` attribute), which supports readability and proper pronunciation by screen readers.

### Guideline 3.2 – Predictable

Make Web pages appear and operate in predictable ways.

Issue: the "Services" link opens automatically without user input.

Recommendation: modify the behavior so that the link opens only when the user explicitly selects it (e.g., when pressing `Enter` while using screen reader).

### Guideline 3.3 – Input Assistance

Help users avoid and correct mistakes.

Issue: error messages in the contact form are not accessible via screen reader, making it difficult for users to identify and correct mistakes.

Recommendation: ensure error messages are clearly focusable, so users can easily find and correct any input errors.

### Guideline 4.1 – Compatible

Maximize compatibility with current and future user agents, including assistive technologies.

Issue: several elements visually resemble buttons but are coded as links, which may confuse assistive technologies and users.

Recommendation: ensure that elements styled as buttons are properly coded with the `button` role or HTML element to align with accessibility expectations.