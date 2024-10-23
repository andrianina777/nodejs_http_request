# 🌐 Node.js HTTP Server - Activation Windows en ligne

Ce projet met en place un simple serveur HTTP en Node.js qui affiche des instructions pour activer Windows en ligne via un script PowerShell. Le serveur écoute sur l'adresse `192.168.130.69` et le port `3001`.

## 🚀 Démarrage rapide

### 📋 Prérequis

Assurez-vous d'avoir installé **Node.js** sur votre machine. Vous pouvez vérifier en exécutant la commande suivante :

```bash
node -v
```

⚙️ Installation
Clonez ce dépôt sur votre machine locale et accédez au répertoire :

```bash
git clone https://votre-repo.git
cd votre-repertoire
```

▶️ Lancer le serveur
Utilisez la commande suivante pour démarrer le serveur :

```bash
node server.js

Le serveur sera accessible à l'adresse suivante : http://192.168.130.69:3001
```

🔧 Utilisation
Lorsque vous accédez à l'URL du serveur, vous recevrez un message avec les étapes d'activation de Windows via PowerShell. Le message inclut une commande pour télécharger et exécuter un script depuis massgrave.dev et un lien de téléchargement supplémentaire.

Exemple de sortie du serveur :
markdown
Activation Windows en ligne
1- Ouvrir powershell en tant qu'admin

/**********************************/
irm https://massgrave.dev/get|iex
/**********************************/


📜 Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.
