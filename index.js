import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js"
import { authRouter } from "./src/routes/auth.routes.js"
import { artistRouter } from "./src/routes/artist.routes.js";
import { publisherRouter } from "./src/routes/publisher.routes.js";
import { contributorRouter } from "./src/routes/contributor.routes.js";
import { contributorRoleRouter } from "./src/routes/contributor-role.routes.js";
import { delieveryConfirmationRouter } from "./src/routes/delivery-confirmations.routes.js";
import { featureRequestRouter } from "./src/routes/feature-request.routes.js";
import { genreRouter } from "./src/routes/genre.routes.js";
import { labelRouter } from "./src/routes/label.routes.js";
import { releaseUserDeclarationRouter } from "./src/routes/release-user-declaration.routes.js";
import { releasesRouter } from "./src/routes/releases.routes.js";
import { statementRouter } from "./src/routes/statement.routes.js";
import { storeUrlRouter } from "./src/routes/store-urls.routes.js";
import { subGenreRouter } from "./src/routes/subgenre.routes.js";
import { usersRouter } from "./src/routes/users.routes.js";
import { trackRouter } from "./src/routes/tracks.routes.js";
import { trendsRouter } from "./src/routes/trends.routes.js";

app.use("/api/v1", authRouter)
app.use("/api/v1", artistRouter)
app.use("/api/v1", publisherRouter)
app.use("/api/v1", contributorRouter)
app.use("/api/v1", contributorRoleRouter)
app.use("/api/v1", delieveryConfirmationRouter)
app.use("/api/v1", featureRequestRouter)
app.use("/api/v1", genreRouter)
app.use("/api/v1", subGenreRouter)
app.use("/api/v1", labelRouter)
app.use("/api/v1", releaseUserDeclarationRouter)
app.use("/api/v1", releasesRouter)
app.use("/api/v1", statementRouter)
app.use("/api/v1", storeUrlRouter)
app.use("/api/v1", usersRouter)
app.use("/api/v1", trackRouter)
app.use("/api/v1", trendsRouter)

app.get("/", (req,res) => {
    res.send("Hello API!")
})

app.listen(process.env.PORT, () => {
    console.log("Server running on port ", process.env.PORT)
})