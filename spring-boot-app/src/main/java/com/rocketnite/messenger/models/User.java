package com.rocketnite.messenger.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class User {
    @Id
    private ObjectId _id;

    private String name;
    private String password;
    private String avatarUrl;

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public ObjectId get_id() {
        return _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }
}
