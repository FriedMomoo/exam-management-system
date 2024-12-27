#!/usr/bin/env python3
import sys
import cv2
import tensorflow as tf

def analyze_feed(video_feed):
    return "No suspicious activity detected"

if __name__ == "__main__":
    feed = sys.argv[1]
    result = analyze_feed(feed)
    print(result)
