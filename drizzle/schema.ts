import { pgTable, uniqueIndex, pgEnum, text, timestamp, foreignKey, boolean, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const userRole = pgEnum("UserRole", ['USER', 'ADMIN'])


export const twoFactorToken = pgTable("TwoFactorToken", {
	id: text("id").primaryKey().notNull(),
	email: text("email").notNull(),
	token: text("token").notNull(),
	expires: timestamp("expires", { precision: 3, mode: 'string' }).notNull(),
},
(table) => {
	return {
		tokenKey: uniqueIndex("TwoFactorToken_token_key").on(table.token),
		emailTokenKey: uniqueIndex("TwoFactorToken_email_token_key").on(table.email, table.token),
	}
});

export const verificationToken = pgTable("VerificationToken", {
	id: text("id").primaryKey().notNull(),
	email: text("email").notNull(),
	token: text("token").notNull(),
	expires: timestamp("expires", { precision: 3, mode: 'string' }).notNull(),
},
(table) => {
	return {
		tokenKey: uniqueIndex("VerificationToken_token_key").on(table.token),
		emailTokenKey: uniqueIndex("VerificationToken_email_token_key").on(table.email, table.token),
	}
});

export const passwordResetToken = pgTable("PasswordResetToken", {
	id: text("id").primaryKey().notNull(),
	email: text("email").notNull(),
	token: text("token").notNull(),
	expires: timestamp("expires", { precision: 3, mode: 'string' }).notNull(),
},
(table) => {
	return {
		tokenKey: uniqueIndex("PasswordResetToken_token_key").on(table.token),
		emailTokenKey: uniqueIndex("PasswordResetToken_email_token_key").on(table.email, table.token),
	}
});

export const twoFactorConfirmation = pgTable("TwoFactorConfirmation", {
	id: text("id").primaryKey().notNull(),
	userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" } ),
},
(table) => {
	return {
		userIdKey: uniqueIndex("TwoFactorConfirmation_userId_key").on(table.userId),
	}
});

export const user = pgTable("User", {
	id: text("id").primaryKey().notNull(),
	email: text("email"),
	password: text("password"),
	emailVerified: timestamp("emailVerified", { precision: 3, mode: 'string' }),
	image: text("image"),
	isTwoFactorEnabled: boolean("isTwoFactorEnabled").default(false).notNull(),
	role: userRole("role").default('USER').notNull(),
	firstName: text("firstName"),
	lastName: text("lastName"),
},
(table) => {
	return {
		emailKey: uniqueIndex("User_email_key").on(table.email),
	}
});

export const account = pgTable("Account", {
	id: text("id").primaryKey().notNull(),
	userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	type: text("type").notNull(),
	provider: text("provider").notNull(),
	providerAccountId: text("providerAccountId").notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: integer("expires_at"),
	tokenType: text("token_type"),
	scope: text("scope"),
	idToken: text("id_token"),
	sessionState: text("session_state"),
},
(table) => {
	return {
		providerProviderAccountIdKey: uniqueIndex("Account_provider_providerAccountId_key").on(table.provider, table.providerAccountId),
	}
});