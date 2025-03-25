---
title: "How to extract .deb file in Ubuntu?"
source: "https://www.geeksforgeeks.org/how-to-extract-deb-file-in-ubuntu/"
author:
  - "[[GeeksforGeeks]]"
published: 2023-10-10
created: 2025-03-24
description: "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions."
tags:
  - "clippings"
---
Last Updated: 16 Sep, 2024

Installation of Software varies from different operating systems. The process to install applications in OS is different in Windows, Linux, and MacOS. On Linux and MacOS, software installation depends upon the Terminal of the OS. For the Linux Operating System, ****Extract Ubuntu DEB File**** is necessary to ****Install Software on Terminal****.

When we want any software installed into the ****Ubuntu Operating System**** we download the ****Linux DEB File**** which supports ****Ubuntu or Debian Linux****. Once the DEB file is downloaded, we can easily install it using the ****DPKG Package Manager**** in the terminal. We can install it using multiple methods such as [****APT****](https://www.geeksforgeeks.org/apt-command-in-linux-with-examples/) ****Package Manager****.

Here, we will visualize the steps needed to ****Open Ubuntu DEB File**** using Terminal along with Software Centre.

## What are DEB Files and Why Are They Important?

DEB files are package files used in Debian-based operating systems like Ubuntu. They contain two TAR files: one for control information and another for the actual data, including the software and installation scripts. DEB files are essential because they:

- ****Standardize Software Installation****: They package all required files and dependencies needed to install software.
- ****Ease of Use****: DEB files can be installed using graphical interfaces or command-line tools, making them versatile.
- ****System Control****: During installation, DEB files have control over system directories, ensuring that all components are placed correctly.

## What Is DPKG Manager on Ubuntu?

There are multiple packages are present in the Linux-based different distro's Operating System. So to manage, to install, to remove we need ****Ubuntu Package Manager****. There are many package managers present eg. ****APT, DPKG, Aptitude****, and many more. Here we used ****Ubuntu DPKG Manager****.

There are multiple packages present in the Linux-based Operating System. So DPKG is a package management system used in Debian-based Linux Operating System. ****Ubuntu DPKG Package**** is a tool that allows users to install, remove, and manage individual software packages that are in the ****DEB File Format****.

## Methods to Extract DEB Files on Ubuntu

To ****Access DEB Ubuntu Files****, there are the following two methods present. Let us start with the ****Software Installer Application**** of Ubuntu.

### Method 1: Extract DEB Files on Ubuntu Using Ubuntu Software Installer

****Step 1:**** Double-click on the ****Downloaded DEB File.****

![Locate the DEB File](https://media.geeksforgeeks.org/wp-content/uploads/20240128174413/1--Open-Downloaded-DEB-File.png)

****Step 2:**** It will open the software installer and then click on the ****Install**** button

![2--Click-Install](https://media.geeksforgeeks.org/wp-content/uploads/20240128174440/2--Click-Install.png)

****Step 3:**** Finally it is installed.

![3--Installation-Completed](https://media.geeksforgeeks.org/wp-content/uploads/20240128174505/3--Installation-Completed.jpg)

### Method 2: Extract DEB Files on Ubuntu Using the Command Line or Terminal

****Step 1:**** Open [****Linux Terminal****](https://www.geeksforgeeks.org/linux-commands/). Press ' ****Ctrl+Alt+T'**** to open a terminal or search for ****"Terminal"**** in the applications.

![4--Open-Terminal](https://media.geeksforgeeks.org/wp-content/uploads/20240128174531/4--Open-Terminal.jpg)

****Step 2:**** Navigate to the ****Directory**** where you downloaded the DEB file. Use the [****Linux CD Command****](https://www.geeksforgeeks.org/basic-linux-commands/) to change the directory. For example, if the DEB file is in the ****"Downloads"**** folder, use the following command:

```
cd ~/Downloads
```

![5--Find-Location](https://media.geeksforgeeks.org/wp-content/uploads/20240128174607/5--Find-Location.jpg)

****Step 3:**** To Install the DEB package we need to install ****DPKG Package Manager****. So to install it use following command. Instead of the 'sample.deb' use your file name.

```
sudo dpkg -i sample(Application file name).deb
```

![6--Execute-Command](https://media.geeksforgeeks.org/wp-content/uploads/20240128174637/6--Execute-Command.jpg)

****Step 4:**** If you have any ****Dependencies Issues**** with your system then just use following command to resolve it.

```
sudo apt-get install -f
```

![7--Execute-2nd-Command](https://media.geeksforgeeks.org/wp-content/uploads/20240128174750/7--Execute-2nd-Command.jpg)

****Step 5:**** After doing this we can verify it is installed.

```
dart --version
```

![8--Verify](https://media.geeksforgeeks.org/wp-content/uploads/20240128174821/8--Verify.jpg)

So the easy way of ****Installing DEB File**** is by using the ****Ubuntu Software Installer****. Because it is a step process and if you are familiar with ****Linux Command Line**** then it is also an easy way to ****Extract DEB Files****. It is advisable to try both ways when you come across the ****Unix DEB File****.

## Conclusion

Installing DEB files on Ubuntu is a process that can be done through both graphical and command-line methods. Both the methods whether you prefer ease of the Ubuntu Software Installer or the control of the Terminal, will help you get your applications up and running efficiently

## How to extract.deb file in Ubuntu? - FAQs

### How to Extract DEB Files on Ubuntu?

> To extract the DEB Files on Ubuntu, the following steps should be executed.
> 
> 1. Open the Files application and locate the DEB File.
> 2. Open the DEB File using Software Installer.
> 3. Click on the Install button to extract.

### How to open DEB Files using Linux Terminal?

> The steps required to open DEB Files using Linux Terminal are the following.
> 
> 1. Open the Linux Terminal.
> 2. Move ahead to the folder where the DEB File is located.
> 3. Execute the command ' ****dpkg -i <filename>.deb**** ' to install the DEB File.

### Does extraction of DEB File mean to decompress it?

> No, Extraction of DEB File is something different than decompressing. In Decompressing, a compressed file is opened into its original size. Whereas, the DEB File extraction installs the application that is stored inside that file. So, the extraction meaning of DEB File is complete different.

### What is the difference between extracting and decompressing a DEB file?

> Extracting a DEB file means installing the application contained within it, whereas decompressing would only unpack the contents without installing the software. In Ubuntu, extraction refers to the installation process.

  

  
[Next Article](https://www.geeksforgeeks.org/how-to-install-deb-files-packages-on-ubuntu/?ref=next_article) [How to Install Deb Files (Packages) on Ubuntu](https://www.geeksforgeeks.org/how-to-install-deb-files-packages-on-ubuntu/?ref=next_article)