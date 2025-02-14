/**
 * @param email Email
 * @param password Password
 * @returns Un token d'authentification JWT
 */
export async function login(email: string, password: string) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erreur lors de la connexion");
    }

    console.log("Connexion réussie :", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function updateProfile(
  firstName: string,
  lastName: string,
  token: string | null
) {
  const JWTtoken = token;
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JWTtoken}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Erreur lors de la mise à jour du profil"
      );
    }

    console.log("Profil mis à jour :", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
