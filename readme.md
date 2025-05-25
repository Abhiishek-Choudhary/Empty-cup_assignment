# 🏠 Interior Designer Listings Web App

A mobile-friendly web application for browsing and shortlisting interior designers. Built with **React (Create React App)** for the frontend and **Node.js** for the backend (no database). Easily deployable locally via **Docker** and publicly via **Netlify** or a VM for the backend.

---

## 📁 Project Structure

/client → React frontend (Create React App)
/server → Node.js backend (no DB)
/docker-compose.yml → Docker orchestration file


---

## 🚀 Features

- View a list of interior designers
- Shortlist/unshortlist designers
- Filter to view only shortlisted profiles
- Mobile-first responsive design
- Full local dev setup using Docker
- Ready for deployment (Netlify + cloud VM)

---

## 🧑‍💻 Local Development (Using Docker)

### 🔧 Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

> You do NOT need to run `npm start` manually — Docker does it for you.

### ▶️ Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2.Start the app

docker compose up --build

3.Access your app

Frontend: http://localhost:3000

Backend API: http://localhost:5000