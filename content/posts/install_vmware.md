---
title: "Hướng Dẫn Cài Đặt VMware Workstation Trên Ubuntu"
date: 2025-03-17T12:00:00+07:00
draft: false
tags: ["blog", "hugo"]
categories: ["Tutorial"]
---

# Hướng Dẫn Cài Đặt VMware Workstation Trên Ubuntu

VMware Workstation là một phần mềm ảo hóa mạnh mẽ, cho phép bạn chạy nhiều hệ điều hành trên cùng một máy tính. Trong bài viết này, chúng ta sẽ hướng dẫn cách cài đặt **VMware Workstation Pro** hoặc **VMware Workstation Player** trên **Ubuntu**.

## 1. Kiểm Tra Hệ Thống
Trước khi cài đặt, hãy kiểm tra xem hệ thống của bạn có hỗ trợ ảo hóa không:
```bash
egrep -c '(vmx|svm)' /proc/cpuinfo
```
Nếu kết quả trả về **0**, có thể máy của bạn không hỗ trợ hoặc ảo hóa chưa được bật trong BIOS.

## 2. Cập Nhật Hệ Thống
Trước khi cài đặt, hãy cập nhật hệ thống Ubuntu:
```bash
sudo apt update && sudo apt upgrade -y
```

## 3. Tải VMware Workstation
Truy cập trang chủ VMware để tải bản mới nhất:
- **VMware Workstation Pro:** [https://www.vmware.com/products/workstation-pro.html](https://www.vmware.com/products/workstation-pro.html)
- **VMware Workstation Player:** [https://www.vmware.com/products/workstation-player.html](https://www.vmware.com/products/workstation-player.html)

Tải xuống file `.bundle`, ví dụ:
```bash
wget -O ~/VMware-Workstation.bundle https://download3.vmware.com/software/wkst/file_name.bundle
```
(Lưu ý: Thay `file_name.bundle` bằng phiên bản bạn tải về)

## 4. Cấp Quyền Thực Thi Và Cài Đặt
Sau khi tải xong, cấp quyền thực thi cho file:
```bash
chmod +x ~/VMware-Workstation.bundle
```
Cài đặt VMware bằng lệnh:
```bash
sudo ./VMware-Workstation.bundle
```
Trong quá trình cài đặt, bạn có thể cần đồng ý với các điều khoản sử dụng.

## 5. Cấu Hình VMware
Sau khi cài đặt xong, khởi chạy VMware bằng lệnh:
```bash
vmware
```
Nếu gặp lỗi kernel module chưa được build, hãy chạy:
```bash
sudo vmware-modconfig --console --install-all
```

## 6. Kích Hoạt Bản Quyền (Nếu Dùng Workstation Pro)
Nếu bạn dùng **VMware Workstation Pro**, hãy nhập key bản quyền hoặc sử dụng bản dùng thử.

## 7. Gỡ Cài Đặt (Nếu Cần)
Nếu muốn gỡ VMware, chạy lệnh:
```bash
sudo vmware-installer --uninstall-product vmware-workstation
```

## Kết Luận
VMware là một công cụ mạnh mẽ giúp bạn chạy nhiều hệ điều hành trên Ubuntu. Hy vọng bài hướng dẫn này giúp bạn cài đặt thành công. 🚀

