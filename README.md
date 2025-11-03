# TUGAS LMS PEMROGRAMAN WEB #

## cara mengganti nama author ##
### 1. ganti nama user dan email di lokal ###
```bash
git config user.name
git config user.email
```
### 2. mengubah nama yang sudah terlanjut commit ###
```bash
git rebase -r --root --exec "git commit --amend --no-edit --reset-author"
```
### 3. push kembali ###
```bash
git push origin nama-branch --force
```
