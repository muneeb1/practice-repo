import json
import requests
import os
import argparse
import config

token = os.environ.get('JIRA_PAT')

# Headers with bearer token
headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }


def create_project(key, name, projectTypeKey, projectLead, description=""):

    # New project data
    new_project = {
        "key": key,
        "name": name,
        "projectTypeKey": projectTypeKey,
        "description": description,
        "lead": projectLead
    }
    
    response = requests.get(f"{config.PROJECT_URL}/{new_project['key']}", headers=headers)

    if response.status_code == 200:
        print("Project already exists.")
    else:
        print("Creating new project...")
        response = requests.post(config.PROJECT_URL, headers=headers, data=json.dumps(new_project))
        if response.status_code == 201:
            print("New project created successfully.")
        else:
            print("Failed to create new project. Status code:", response.status_code, response.content)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-k','--key', required=True)
    parser.add_argument('-n','--name', required=True)
    parser.add_argument('-pk','--projectTypeKey', required=True)
    parser.add_argument('-pl','--projectLead', required=True)
    parser.add_argument('-d','--description', required=False)
    args = parser.parse_args()
    create_project(args.key, args.name, args.projectTypeKey, args.projectLead, args.description)
