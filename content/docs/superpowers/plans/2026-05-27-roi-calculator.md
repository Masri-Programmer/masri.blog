# Interactive ROI Calculator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a dynamic ROI calculator on the homepage that users can interact with to see potential savings from automation, with all text and logic configuration managed via Obsidian.

**Architecture:** Use `ObsidianSyncCommand` to parse a new `roi-calculator.md` file and store the configuration (multipliers, labels, thresholds) in the `PageMeta` model. Create a reactive Vue component for the UI and integrate it into the homepage.

**Tech Stack:** Laravel, Vue 3, Tailwind CSS, Spatie Yaml Front Matter.

---

### Task 1: Obsidian Source & Model Verification

**Files:**
- Create: `content/Home/roi-calculator.md`
- Verify: `content/masri-programmer-app/app/Models/PageMeta.php`

- [ ] **Step 1: Create the Obsidian source file**

```markdown
---
title: Calculate Your Automation ROI
description: See how much time and money your business could save by automating manual tasks.
efficiency_multiplier: 0.7
cta_threshold: 100000
labels:
  team_size: "Team Size"
  manual_hours: "Manual Hours / Week / Person"
  hourly_cost: "Average Cost / Hour"
  annual_savings: "Potential Annual Savings"
  weekly_savings: "Weekly Savings"
  cta_default: "Book Your Free Discovery Call"
  cta_high_value: "Apply for Private Automation Audit"
---
# Why Automate?
Beyond just saving money, automation reduces burnout and allows your best people to focus on what matters.
```

- [ ] **Step 2: Commit the Obsidian file**

```bash
git add content/Home/roi-calculator.md
git commit -m "content: add ROI calculator source in Obsidian"
```

---

### Task 2: Update ObsidianSyncCommand

**Files:**
- Modify: `content/masri-programmer-app/app/Console/Commands/ObsidianSyncCommand.php`

- [ ] **Step 1: Update the sync command to handle ROI calculator data**

```php
// In ObsidianSyncCommand.php

// In handle()
$this->syncHomeSections($obsidianRoot . 'Home');

// Add new method
protected function syncHomeSections($path)
{
    if (!File::isDirectory($path)) return;

    $file = $path . '/roi-calculator.md';
    if (File::exists($file)) {
        $object = YamlFrontMatter::parse(File::get($file));
        \App\Models\PageMeta::updateOrCreate(
            ['page_key' => 'roi_calculator'],
            [
                'meta_title' => $object->matter('title'),
                'meta_description' => $object->matter('description'),
                'keywords' => json_encode([
                    'multiplier' => $object->matter('efficiency_multiplier'),
                    'threshold' => $object->matter('cta_threshold'),
                    'labels' => $object->matter('labels'),
                    'body' => $object->body(),
                ]),
            ]
        );
        $this->info('ROI Calculator synced.');
    }
}
```

- [ ] **Step 2: Run the sync command and verify database**

Run: `php artisan obsidian:sync`
Run: `php artisan tinker --execute="echo \App\Models\PageMeta::where('page_key', 'roi_calculator')->first()->meta_title;"`
Expected: "Calculate Your Automation ROI"

- [ ] **Step 3: Commit changes**

```bash
git add content/masri-programmer-app/app/Console/Commands/ObsidianSyncCommand.php
git commit -m "feat: sync ROI calculator config from Obsidian"
```

---

### Task 3: Create ROICalculator Component

**Files:**
- Create: `content/masri-programmer-app/resources/js/pages/home/ROICalculator.vue`

- [ ] **Step 1: Implement the Vue component with reactive logic**

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Users, Euro } from 'lucide-vue-next';

const props = defineProps<{
    config: {
        title: string;
        description: string;
        multiplier: number;
        threshold: number;
        labels: Record<string, string>;
    }
}>();

const teamSize = ref([10]);
const manualHours = ref([5]);
const hourlyCost = ref([50]);

const annualSavings = computed(() => {
    return Math.round(teamSize.value[0] * manualHours.value[0] * hourlyCost.value[0] * props.config.multiplier * 52);
});

const isHighValue = computed(() => annualSavings.value >= props.config.threshold);

const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
};
</script>

<template>
    <div class="relative overflow-hidden rounded-3xl border bg-background/50 p-8 backdrop-blur-xl md:p-12 shadow-2xl">
        <div class="grid gap-12 lg:grid-cols-2">
            <div class="space-y-8">
                <div>
                    <h3 class="text-3xl font-bold tracking-tight text-foreground">{{ config.title }}</h3>
                    <p class="mt-4 text-muted-foreground">{{ config.description }}</p>
                </div>

                <div class="space-y-6">
                    <div class="space-y-4">
                        <div class="flex justify-between text-sm font-medium">
                            <span class="flex items-center gap-2"><Users class="h-4 w-4" /> {{ config.labels.team_size }}</span>
                            <span class="text-primary font-bold">{{ teamSize[0] }}</span>
                        </div>
                        <Slider v-model="teamSize" :min="1" :max="200" :step="1" />
                    </div>

                    <div class="space-y-4">
                        <div class="flex justify-between text-sm font-medium">
                            <span class="flex items-center gap-2"><Clock class="h-4 w-4" /> {{ config.labels.manual_hours }}</span>
                            <span class="text-primary font-bold">{{ manualHours[0] }}h</span>
                        </div>
                        <Slider v-model="manualHours" :min="1" :max="40" :step="1" />
                    </div>

                    <div class="space-y-4">
                        <div class="flex justify-between text-sm font-medium">
                            <span class="flex items-center gap-2"><Euro class="h-4 w-4" /> {{ config.labels.hourly_cost }}</span>
                            <span class="text-primary font-bold">€{{ hourlyCost[0] }}</span>
                        </div>
                        <Slider v-model="hourlyCost" :min="20" :max="150" :step="5" />
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center rounded-2xl bg-primary/5 p-8 text-center border border-primary/10">
                <TrendingUp class="h-12 w-12 text-primary mb-4" />
                <h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{{ config.labels.annual_savings }}</h4>
                <div class="mt-2 text-5xl font-black text-foreground md:text-6xl tabular-nums">
                    {{ formatCurrency(annualSavings) }}
                </div>
                <p class="mt-4 text-muted-foreground">{{ config.labels.weekly_savings }}: {{ formatCurrency(annualSavings / 52) }}</p>
                
                <Button size="lg" class="mt-8 w-full py-6 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105" :variant="isHighValue ? 'default' : 'secondary'" @click="saveAndBook">
                    {{ isHighValue ? config.labels.cta_high_value : config.labels.cta_default }}
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// ... (rest of imports)
import { router } from '@inertiajs/vue3';

const saveAndBook = () => {
    localStorage.setItem('masri_roi_context', JSON.stringify({
        teamSize: teamSize.value[0],
        manualHours: manualHours.value[0],
        hourlyCost: hourlyCost.value[0],
        savings: annualSavings.value
    }));
    router.visit(route('contact'));
};
</script>
```

- [ ] **Step 2: Commit component**

```bash
git add content/masri-programmer-app/resources/js/pages/home/ROICalculator.vue
git commit -m "feat: create ROICalculator component"
```

---

### Task 4: Integrate into Homepage

**Files:**
- Modify: `content/masri-programmer-app/resources/js/pages/home/Homepage.vue`
- Modify: `content/masri-programmer-app/app/Http/Controllers/ContentController.php` (optional if home already has data)

- [ ] **Step 1: Update Homepage.vue to accept and render ROI config**

```vue
// In Homepage.vue

import ROICalculator from './ROICalculator.vue';

// Define props if not already
const props = defineProps<{
    roiConfig?: any;
    // ...
}>();

// In template, insert where appropriate
<swr id="roi-calculator" class="py-24">
    <ROICalculator v-if="roiConfig" :config="roiConfig" />
</swr>
```

- [ ] **Step 2: Update the Home Route/Controller to pass the config**

```php
// If the route is a closure in web.php
Route::get('/', function () {
    $roi = \App\Models\PageMeta::where('page_key', 'roi_calculator')->first();
    $roiConfig = null;
    if ($roi) {
        $meta = json_decode($roi->keywords, true);
        $roiConfig = [
            'title' => $roi->meta_title,
            'description' => $roi->meta_description,
            'multiplier' => $meta['multiplier'] ?? 0.7,
            'threshold' => $meta['threshold'] ?? 100000,
            'labels' => $meta['labels'] ?? [],
        ];
    }

    return Inertia::render('home/Homepage', [
        'roiConfig' => $roiConfig
    ]);
})->name('home');
```

- [ ] **Step 3: Commit integration**

```bash
git add content/masri-programmer-app/resources/js/pages/home/Homepage.vue content/masri-programmer-app/routes/web.php
git commit -m "feat: integrate ROI calculator into homepage"
```

---

### Task 5: Final Verification

- [ ] **Step 1: Check the site**

Verify the calculator appears on the homepage and math works. Change a label in Obsidian, sync, and verify it updates on the site.

- [ ] **Step 2: Cleanup**

Remove any temporary tinker commands or logs.
