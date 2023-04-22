package com.teameight.studyspots;

public class Location {
    private String name;
    private String address;
    private double latitude;
    private double longitude;
    private String googleMapsURL;
    private String image_URL;
    private double locationRating;

    public Location(String name, String address, double latitude, double longitude,
                    String googleMapsURL, String image_URL, double locationRating){
            name=this.name;
            address=this.address;
            latitude = this.latitude;
            longitude = this.longitude;
            googleMapsURL = this.googleMapsURL;
            image_URL = this.image_URL;
            locationRating = this.locationRating;

    }

}
