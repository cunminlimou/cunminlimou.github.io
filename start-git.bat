@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
title start-git

:ADD_STAGE
echo.
set /p action="是否执行 git add . ? (y/n): "
if /i "!action!" neq "y" goto ADD_STAGE
:ADD_RUN
git add .
set /p retry="[add] 执行完毕，是否重新执行此步? (y/n): "
if /i "!retry!"=="y" goto ADD_RUN

:COMMIT_STAGE
echo.
set /p action="是否执行 git commit -m 'my commit' ?  (y/n): "
if /i "!action!" neq "y" goto COMMIT_STAGE
:COMMIT_RUN
echo.
:: 清空旧变量，防止干扰
set msg=
set /p msg="请输入 commit 提交信息: "
if "!msg!"=="" (
    echo 错误：提交信息不能为空！
    goto COMMIT_RUN
)
git commit -m "!msg!"
set /p retry="[commit] 执行完毕，是否重新执行此步? (y/n): "
if /i "!retry!"=="y" goto COMMIT_RUN

:PUSH_STAGE
echo.
set /p action="是否执行 git push ? (y/n): "
if /i "!action!" neq "y" goto PUSH_STAGE
:PUSH_RUN
git push
set /p retry="[push] 执行完毕，是否重新执行此步? (y/n): "
if /i "!retry!"=="y" goto PUSH_RUN

:END_STAGE
echo.
echo ===================================
echo 所有操作已完成！
pause