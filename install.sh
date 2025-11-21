#!/bin/bash

# Function to ask for user confirmation
confirm() {
    read -r -p "$1 [y/N] " response
    case "$response" in
        [yY][eE][sS]|[yY])
            true
            ;;
        *)
            false
            ;;
    esac
}

echo "Updating the system..."
sudo dnf -y update

echo "Installing Python 3 pip..."
sudo dnf -y install python3-pip

echo "Start Installing bun ..."
curl -fsSL https://bun.sh/install | bash

echo "Start Installing postgresql ..."
sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/F-42-x86_64/pgdg-fedora-repo-latest.noarch.rpm
sudo dnf install -y postgresql17-server postgresql17-contrib
sudo /usr/pgsql-17/bin/postgresql-17-setup initdb
sudo systemctl enable postgresql-17
sudo systemctl start postgresql-17

echo "Start Installing FFMPEG & ImageMagick ..."
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

sudo dnf -y install ffmpeg

sudo dnf -y install ImageMagick ImageMagick-heic

echo "Installing ExifTool..."
sudo dnf -y install perl-Image-ExifTool


# TMPDIR=~/TEMDIR pip3 install torch # if not enough space, need to create a temporary dir to stored downloaded packages
pip3 install torch torchvision transformers pillow

#Install for location lookup base on coordinates
pip3 install reverse_geocoder --use-pep517