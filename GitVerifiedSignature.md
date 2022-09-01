# SSH Verified Signatures for Git Commits

## Git Version

Signatures using SSH is only available in Git versions 2.34 and above
![]

### Check your Git Version

Run `git --version`.  If you are less than 2.34 you will need to update it.
| Step | Command | Effect |
|---|---|---|
| 1 | `brew update && brew upgrade` | Makes sure Homebrew is in working order |
| 2 | `brew install git` | Only necessary if you did not initially use Homebrew |
| 3 | restart terminal | Reloads shell |
| 4 | `brew doctor` | Checks to make sure all paths are included. Fix any problems by executing the suggested commands. For example, you may have to add something akin to `export PATH=/opt/homebrew/sbin:$PATH` to your shell config. If you made any changes, restart your terminal again. |
| 5 | `git --version` | If it returns 2.34 or higher (current version is 2.37) then you are all set. |

## Creating an SSH Key

If you need to generate an SSH key, here is a [Github doc](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for reference. 

- create the key using `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
- add the key to the ssh agent using `eval "$(ssh-agent -s)"`
- create ~/.ssh/config if on Mac ([details](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent))
- add the key to your keychain using `ssh-add -K ~/.ssh/id_ed25519`
- add the key to your Github account for 'authentication' ([details](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account))
- ALSO add the key to your Github account for 'signing'

## Git Configuration

Now set up Git on the command line. After completing the following config steps, you'll be able to sign any commit using the `-S` flag. Example: `git commit -S -m '<commit_message>'`. If you complete Step 4 you won't have to use the flag as the default will be to add the signature.

| Step | Command | Effect |
|---|---|---|
| 1 | `git config --global gpg.format ssh` | Sets the default signature type |
| 2 | `ssh-add -L` | View a list of your ssh keys |
| 3 | `git config --global user.signingKey "ssh-ed25519 <your key id>"` | Sets the default ssh key for signatures |
| 4 | `git config --global commit.gpgsign true` | Optional command to set automatic signatures for all commits |

## Verify Signature Setup

You can run `git commit --allow-empty --message="Testing SSH signing"` to test the setup.

If you see 'unverified' next to your commits on Github, double check to make sure that you added the SSH key with a purpose of 'signing'.

# You're All Set for Verified Signatures!