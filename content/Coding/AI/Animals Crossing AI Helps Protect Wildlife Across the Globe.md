---
title: "Animals Crossing: AI Helps Protect Wildlife Across the Globe"
source: "https://blogs.nvidia.com/blog/ai-protects-wildlife/?ref=dailydev"
author:
  - "[[Angie Lee]]"
published: 2025-03-03
created: 2025-03-28
description: "This World Wildlife Day, learn how artificial intelligence equips global organizations and on-the-ground conservationists to save rhinos, classify sharks, detect wildfires and more."
tags:
  - "clippings"
---
From Seattle, Washington, to Cape Town, South Africa — and everywhere around and between — AI is helping conserve the wild plants and animals that make up the intricate web of life on Earth.

It’s critical work that sustains ecosystems and supports biodiversity at a time when the United Nations [estimates](https://wildlifeday.org/en/about) over 1 million species are threatened with extinction.

World Wildlife Day, a UN initiative, is celebrated every March 3 to recognize the unique contributions wild animals and plants have on people and the planet — and vice versa.

![](https://www.youtube.com/watch?v=OPEDvG66cXM)

“Our own survival depends on wildlife,” the above video on this year’s celebration says, “just as much as their survival depends on us.”

Learn more about some of the leading nonprofits and startups using [NVIDIA AI](https://www.nvidia.com/en-us/solutions/ai/) and [accelerated computing](https://www.nvidia.com/en-us/data-center/solutions/accelerated-computing/) to protect wildlife and natural habitats, today and every day:

## Ai2’s EarthRanger Offers World’s Largest Elephant Database

Seattle-based nonprofit AI research institute Ai2 offers EarthRanger, a software platform that helps protected-area managers, ecologists and wildlife biologists make more informed operational decisions for wildlife conservation in real time, whether preventing poaching, spotting ill or injured animals, or studying animal behavior.

![](https://www.youtube.com/watch?v=sT5kPMGnIuw)

Among Ai2’s efforts with EarthRanger is the planned development of a machine learning model — trained using NVIDIA Hopper GPUs in the cloud — that predicts the movement of elephants in areas close to human-wildlife boundaries where elephants could raid crops and potentially prompt humans to retaliate.

With access to the world’s largest repository of elephant movement data, made possible by EarthRanger users who’ve shared their data, the AI model could help predict elephant behaviors, then alert area managers to safely guide the elephants away from risky situations that could arise for them or for people in the vicinity. Area managers or rangers typically use helicopters, other vehicles and [chili bombs](https://www.worldwildlife.org/magazine/issues/summer-2016/articles/using-chili-bombs-to-protect-both-elephants-and-farmers) to safely reroute elephants.

![](https://blogs.nvidia.com/wp-content/uploads/2025/03/earthranger-elephant-hugo-960x640.jpg)

An elephant named Hugo wears a monitoring device that helps keep him safe. Image courtesy of the Mara Elephant Project.

Beyond elephants, EarthRanger collects, integrates and displays data on a slew of wildlife — aggregated from over 100 data sources, including camera traps, acoustic sensors, satellites, radios and more. Then, the platform combines the data with field reports to provide a unified view of collared wildlife, rangers, enforcement assets and infrastructure within a protected area.

![](https://blogs.nvidia.com/wp-content/uploads/2025/03/earthranger-interface.png)

EarthRanger platform interface.

“Name a country, species or an environmental cause and we’re probably supporting a field organization’s conservation efforts there,” said Jes Lefcourt, director of EarthRanger at Ai2.

It’s deployed by governments and conservation organizations in 76 countries and 650 protected areas, including nearly every national park in Africa, about a dozen state fishing and wildlife departments in the U.S., as well as many other users across Latin America and Asia.

Four of these partners — Rouxcel Technology, OroraTech, Wildlife Protection Services and Conservation X Labs — are highlighted below.

## Rouxcel Technology Saves Rhinos With AI

South African startup Rouxcel Technology’s AI-based RhinoWatches, tapping into EarthRanger, learn endangered black and white rhinos’ behaviors, then alert authorities in real time of any detected abnormalities. These abnormalities can include straying from typical habitats, territorial fighting with other animals and other potentially life-threatening situations.

It’s critical work, as there are just about [28,000 rhinos left in the world](https://apnews.com/article/rhino-poaching-horns-preservation-52691fcd04e52f7cdf0a7c2eb369d9a8), from 500,000 at the beginning of the 20th century.

![](https://blogs.nvidia.com/wp-content/uploads/2025/03/rouxcel-rhinowatch-960x1200.jpg)

A white rhino sports a Rouxcel RhinoWatch. Image courtesy of Hannah Rippon.

Rouxcel, based in Cape Town, has deployed over 1,200 RhinoWatches — trained and optimized using NVIDIA accelerated computing — across more than 40 South African reserves. The startup, which uses the Ai2 EarthRanger platform, protects more than 1.2 million acres of rhino habitats, and has recently expanded to help conservation efforts in Kenya and Namibia.

Looking forward, Rouxcel is developing AI models to help prevent poaching and human-wildlife conflict for more species, including pangolins, a critically endangered species.

## OroraTech Monitors Wildfires and Poaching With NVIDIA CUDA, Jetson

OroraTech — a member of the [NVIDIA Inception](https://www.nvidia.com/startups/?nvid=nv-int-tblg-295718-vt33) program for cutting-edge startups — uses the EarthRanger platform to protect wildlife in a different way, offering a wildfire detection and monitoring service that fuses satellite imagery and AI to safeguard the environment and prevent poaching.

![](https://www.youtube.com/watch?v=lLXsVtKq6b0)

[Combining data](https://blogs.nvidia.com/blog/ororatech-wildfires-from-space/) from satellites, ground-based cameras, aerial observations and local weather information, OroraTech detects threats to natural habitats and alerts users in real time. The company’s technologies monitor more than 30 million hectares of land that directly impact wildlife in Africa and Australia. That’s nearly the size of the Great Barrier Reef.

![](https://blogs.nvidia.com/wp-content/uploads/2025/03/ororatech-bushfire-960x960.png)

OroraTech detects an early bushfire near Expedition National Park in Australia.

OroraTech flies an [NVIDIA Jetson](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/) module for edge AI and data processing onboard all of its satellite payloads — the instruments, equipment and systems on a satellite designed for performing specific tasks. Through GPU-accelerated image processing, OroraTech achieves exceptional latency, delivering fire notifications to users on the ground as fast as five minutes after image acquisition.

The AI-based fire-detection pipeline uses the [NVIDIA cuDNN](https://developer.nvidia.com/cudnn) library of deep neural network primitives and the [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) software development kit for thermal anomaly detection and cloud masking in space, leading to high-precision fire detections.

## Wildlife Protection Solutions Help Preserve Endangered Species

International nonprofit Wildlife Protection Solutions (WPS) supports more than 250 conservation projects in 50+ countries. Its remote cameras — about 3,000 deployed across the globe — using AI models provide real-time monitoring of animals and poachers, alerting rangers to intercede before wildlife is harmed.

![](https://blogs.nvidia.com/wp-content/uploads/2025/03/wps-lion-960x691.png)

A lion detected with WPS technologies.

WPS — which also taps into the EarthRanger platform — harnesses NVIDIA accelerated computing to optimize training and inference of its AI models, which process and analyze 65,000 photos per day.

![](https://www.youtube.com/watch?v=DFzAUDOU-vk)

The [WPS tool](https://www.wildlifeprotectionsolutions.org/conservation/#remote%20monitoring) is free and available on any mobile, tablet or desktop browser, enabling remote monitoring, early alerting and proactive, automated deterrence of wildlife or humans in sensitive areas.

## Conservation X Labs Identifies Species From Crowdsourced Images

Washington D.C.-based Conservation X Labs — which is on a mission to prevent the [sixth mass extinction](https://www.worldwildlife.org/stories/what-is-the-sixth-mass-extinction-and-what-can-we-do-about-it), or the dying out of a high percentage of the world’s biodiversity due to natural phenomena and human activity — also uses EarthRanger, including for its [Wild Me](https://conservationxlabs.com/wild-me) solution: open-source AI software for the conservation research community.

Wild Me supports over 2,000 researchers across the globe running AI-enabled wildlife population studies for marine and terrestrial species.

For example, Wild Me helps researchers classify whale sharks using computer vision:

![](https://www.youtube.com/watch?v=rTcuC2QY_0Q)

*Above video courtesy of Wild Me by Conservation X Labs.*

The crowdsourced database — which currently comprises 14 million photos — lets anyone upload imagery of species. Then, AI [foundation models](https://blogs.nvidia.com/blog/what-are-foundation-models/) trained using NVIDIA accelerated computing help identify species to ease and accelerate animal population assessments and other research that supports the fight against species extinction.

In addition, Conservation X Labs’s [Sentinel](https://conservationxlabs.com/the-sentinel) technology transforms traditional wildlife monitoring tools — like trail cameras and acoustic recorders — with AI, processing environmental data as it’s collected and providing conservationists with real-time, data-driven insights through satellite and cellular networks.

To date, Sentinel devices have delivered about 100,000 actionable insights for 80 different species. For example, see how the technology flags a limping panther, so wildlife protectors could rapidly step in to offer aid:

Video Player  <video width="1280" height="1000" src="https://blogs.nvidia.com/wp-content/uploads/2025/03/limping_panther.mp4?_=1"><source type="video/mp4" src="https://blogs.nvidia.com/wp-content/uploads/2025/03/limping_panther.mp4?_=1"> <a href="https://blogs.nvidia.com/wp-content/uploads/2025/03/limping_panther.mp4">https://blogs.nvidia.com/wp-content/uploads/2025/03/limping_panther.mp4</a></video> 00:00 00:00 00:10 [Use Up/Down Arrow keys to increase or decrease volume.](https://blogs.nvidia.com/blog/ai-protects-wildlife/)

*Above video courtesy of Sentinel by Conservation X Labs.*

*Learn more about how NVIDIA technologies bolster conservation and environmental initiatives at* [*NVIDIA GTC*](https://www.nvidia.com/gtc/)*, a global AI conference running March 17-21 in San Jose, California, including at sessions on how AI is supercharging* [*Antarctic flora monitoring*](https://www.nvidia.com/gtc/session-catalog/?tab.catalogallsessionstab=16566177511100015Kus&search=flora#/session/1729736872112001L1rB)*, enhancing a* [*digital twin of the Great Barrier Reef*](https://www.nvidia.com/gtc/session-catalog/?tab.catalogallsessionstab=16566177511100015Kus&search=great%20barrier%20reef#/session/1729740910008001cGyM) *and helping* [*mitigate urban climate change*](https://www.nvidia.com/gtc/session-catalog/?tab.catalogallsessionstab=16566177511100015Kus&search=pollution#/session/1729182084937001UwLo)*.*

*Featured video — depicting Persian leopards in Turkmenistan — courtesy of Sentinel by Conservation X Labs*.