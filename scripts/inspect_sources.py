import urllib.request
import json
import sys

repos = [
    "zhaosenlin12-creator/MotionSites",
    "RupakThapa/motionsites",
    "XiesRay/motionsites-prompt-collection",
    "superdesigndev/superdesign-prompts"
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for repo in repos:
    url = f"https://api.github.com/repos/{repo}"
    print(f"\n==================================================")
    print(f"Fetching API metadata for: {repo}")
    print(f"==================================================")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            print("Full Name:", data.get("full_name"))
            print("Description:", data.get("description"))
            print("Default Branch:", data.get("default_branch"))
            print("License:", data.get("license"))
            print("Stars:", data.get("stargazers_count"))
            print("Forks:", data.get("forks_count"))
            print("Size (KB):", data.get("size"))
            print("Updated At:", data.get("updated_at"))
    except Exception as e:
        print(f"API Error for {repo}: {e}")

    # Also list repository contents root
    contents_url = f"https://api.github.com/repos/{repo}/contents"
    try:
        req = urllib.request.Request(contents_url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            contents = json.loads(resp.read().decode('utf-8'))
            print("\nRoot files/folders:")
            for item in contents:
                print(f" - [{item.get('type')}] {item.get('name')} ({item.get('size')} bytes)")
    except Exception as e:
        print(f"Contents Error for {repo}: {e}")
