# Quick guide to install arch linux
Based on [tony, btw](https://www.youtube.com/watch?v=oeDbo-HRaZo&t=982s) video.

- Use cfdisk /dev/sd* to make a partition of your disk.
- Formatting disk partitions
    - mkfs.ext4 /dev/root_partition
    - mkswap /dev/swap_partition
    - mkfs.fat -F 32 /dev/efi_system_partition
- Mounting the file systems
    - mount /dev/root_partition /mnt/
    - mount --mkdir /dev/efi_system_partition /mnt/boot/efi
    - swapon /dev/swap_partition
- Installing essential packages
    - pacstrap /mnt base linux linux-firmware sof-firmware base-devel grub efibootmgr networkmanager vim
- Generating fstab file
    - genfstab /mnt >> /mnt/etc/fstab
- Chrooting to the filesystem
    - arch-chroot /mnt
- Setting time
    - ln -sf /usr/share/zoneinfo/Area/Location /etc/localtime
    - hwclock --systohc
- Localization 
    - edit /etc/locale.gen by uncommenting en_US.UTF-8
    - echo 'LANG=en_US.UTF-8' >> /etc/locale.conf
- Network Config
    - echo "<your-hostname>" >> /etc/hostname
- Configuring Users
    - Create the root password with `passwd`
    - Create a user with `useradd -m -G wheel -s /bin/bash <user-name>`
    - Create a password for user with `passwd <user-name>`
- Configure sudo
    - `EDITOR=vim visudo`
    - In vim search for %wheel ALL=(ALL:ALL) ALL
    - Un-comment the line, and save the file
- Enabling core-sytems utilites
    - NetworkManager
	- `systemctl enable NetworkManager`
    * For others check the comments
- Setup Boot loader
    - grub-install /dev/<disk>
    - grub-mkconfig -o /boot/grub/grub.cfg
- Exit..
    - `exit` => to exit from chroot
    - `umount -R /mnt`
    - `reboot`


Comment
=======
- Installing Pipewire
    - `sudo pacman -S pipewire pipewire-audio pipewire-alsa pipewire-pulse pipewire-jack wireplumber`
    - `systemctl --user enable pipewire pipewire-pulse wireplumber`
    - `systemctl --user start pipewire pipewire-pulse wireplumber`
    - `reboot`
    - `pactl info`

- Using Bluetooth
    - `sudo pacman -S bluez bluez-utils`
    - `sudo systemctl enable/start bluetooth.service`
    - `systemctl status bluetooth`
    - `bluetoothctl list `
    - `sudo pacman -S bluetui` --> Tui management

