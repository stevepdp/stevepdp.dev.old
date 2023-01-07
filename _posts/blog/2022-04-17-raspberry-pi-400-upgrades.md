---
title: Upgrading the Raspberry Pi 400
permalink: /blog/upgrading-the-raspberry-pi-400.html

og_title: "Upgrading the Raspberry Pi 400"
og_description: "Detailing my experience upgrading from standard microSD storage to NVMe via USB3."
og_image: ""

layout: single-blog
type: single-blog
category: blog
tags: [all, blog]

rss_category: Blog
---

Something I've been toying with recently is the Raspberry Pi 400.

One of the <a href="https://www.commitstrip.com/en/2014/11/25/west-side-project-story" rel="noopener" target="_blank">many side projects</a> on my mind is to create a simple game using only the 400. Unlike what I've achieved with Unity recently, this will be an engine of my own making and in more "closer to the metal" technologies than what I'm familiar with. There's a lot yet to figure out in terms of Linux programming, building and the remote debugging infrastructure I'd like...but I'm certain the experience will prove valuable.

Being more familiar with the artistic side of things, I've already experimented with the handful of open source tools I intend to use for generating the art, sound and so on. It became clear however that I would need to make the 400 perform better if I was to use it fully for the creative. I could cheat and use my vastly more powerful P-series Thinkpad for these creative tasks, but the major point of this experiment is to create a game, from beginning to end, using only the Raspberry Pi 400. Constraints are fun!


### Your Options To Improve Performance

Modern Raspberry Pis are said to support natively booting from USB 3.0, so running one from a USB 3.0-connected SSD seems like the most obvious way to improve performance. Another method is to overclock it, which is made easy on the 400 since it includes a huge heat sink! Finally, running the 64-bit OS opposed to the recommended 32-bit OS is said to afford approximately 25% extra performance across applications.

Something I learned recently too is that you can gain a lot of desktop performance back simply by running hardware at a lower resolution. Due to the amount of pixels I once pushed at 4k with fractional scaling, my Thinkpad was working overtime to drive it. Downgrading to a 2k display with no fractional scaling however reversed the problems I had been experiencing. Dropping your display resolution is a good way to get more out of your 400. You'll work it less at 2k and much less still at 1080p, 720p and so on. While a 1080p display perhaps offers the best balance of performance and screen real-estate on the 400, I know myself to work best at 2560x1440 and so will continue using a 2k display.

After performing each of the upgrades, I can say the improvement is impressive! It reminds of my experiences upgrading PCs from rotating disks to SSDs not so long ago.


### The Shopping List

* £9.95 - 128GB Samsung M.2 SSD (refurbished)
* £7.94 - Sabrent M.2 SSD USB 3.0 Aluminum Enclosure (opened, unused)
* £4.79 - USB 3.0 type A male to micro B male at 10cm length (new, optional)

The Sabrent enclosure comes with a 30cm cable which is great for traditional towers/laptops, but it results in a bit of a mess with the 400. As a small quality of life improvement, I recommend buying the shorter 10cm lead too.

Total expenditure: £22.68


### Performing the Upgrades

Adding the following lines to `/boot/config.txt`, I overclocked my 400 to a stable 2.2GHz from it's factory 1.8GHz configuration:

<pre>
force_turbo=1
over_voltage=8
arm_freq=2200
</pre>

Surprisingly, this didn't seem to set the warranty bit either.

(Thanks to Jeff Geerling for <a href="https://www.jeffgeerling.com/blog/2020/raspberry-pi-400-can-be-overclocked-22-ghz" rel="noopener" target="_blank">these overclocking notes</a>)

Next up, I installed the M.2 SSD into the enclosure and flashed Raspberry Pi OS (64-bit) to it using the excellent Raspberry Pi Imager program.

To make the 400 to boot from M.2 SSD when no microSD card is present, it was necessary to upgrade the 400's eeprom firmware with:

`sudo rpi-eeprom-update` - to first check availability of an eeprom upgrade.  
`sudo rpi-eeprom-update -d -a` to perform the eeprom upgrade.  


### First Impressions

What an improvement! It's a reasonably clutter-free setup too albeit now giving up one of the two available USB-3 ports. The one remaining USB-3 port I now run up my BenQ monitor's powered USB-3 hub where a few additional devices are attached. The microSD port remains free too, which might be handy for backups among other things.

The improvement seemed measurably better. So next I decided to go back and gather some data. I performed a range of Raspberry Pi Diagnostics tests and `apt` operations with a timer. Each time using a freshly flashed image with no apt upgrades applied.


### Samsung 256GB Evo Select microSD. No Overclock

Raspberry Pi Diagnostics:

<pre>
Sequential write speed 26804 KB/sec (target 10000) - PASS
Random write speed 756 IOPS (target 500) - PASS
Random read speed 3537 IOPS (target 1500) - PASS
</pre>

Execution of: `time { sudo apt update ; sudo apt dist-upgrade -y ; }`

<pre>
real		0m27.539s
user		0m12.021s
sys		0m4.340s
</pre>


### Samsung 128GB M.2 SSD. No Overclock

Raspberry Pi Diagnostics:

<pre>
Sequential write speed 147603 KB/sec (target 10000) - PASS
Random write speed 15240 IOPS (target 500) - PASS
Random read speed 15398 IOPS (target 1500) - PASS
</pre>

Execution of: `time { sudo apt update; sudo apt dist-upgrade -y; }`

<pre>
real		0m25.796s
user		0m12.228s
sys		0m4.287s
</pre>


### Samsung 128GB M.2 SSD. 2.2GHz Overclock

Raspberry Pi Diagnostics:

<pre>
Sequential write speed 153121 KB/sec (target 10000) - PASS
Random write speed 16367 IOPS (target 500) - PASS
Random read speed 16978 IOPS (target 1500) - PASS
</pre>

Execution of: `time { sudo apt update; sudo apt dist-upgrade -y; }`
<pre>
real		0m18.911s
user		0m10.906s
sys 		0m4.033s
</pre>


### Final Thoughts

Note that wireless speeds vary and it's possible that `apt` had already updated it's package lists in the background...so take those `apt` figures with a grain of salt. But with regards to the disk read/write performance and overclocking gains, then I believe the results speak for themselves!