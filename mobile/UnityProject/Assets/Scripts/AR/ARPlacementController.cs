using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;
using UnityEngine.InputSystem;

public class ARPlacementController : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private Camera arCamera;
    [SerializeField] private ARRaycastManager raycastManager;
    [SerializeField] private GameObject placementPrefab;
    [SerializeField] private GameObject reticle;

    [Header("Raycast")]
    [SerializeField] private TrackableType raycastType =
        TrackableType.PlaneWithinPolygon;

    private readonly List<ARRaycastHit> hits = new();

    private Pose placementPose;
    private bool placementPoseValid;

    private GameObject placedObject;

    private void Update()
    {
        UpdatePlacementPose();
        UpdateReticle();

        if (placementPoseValid &&
            Touchscreen.current != null &&
            Touchscreen.current.primaryTouch.press.wasPressedThisFrame)
        {
            PlaceObject();
        }
    }

    private void UpdatePlacementPose()
    {
        Vector2 screenCenter = new(
            Screen.width * 0.5f,
            Screen.height * 0.5f
        );

        placementPoseValid = raycastManager.Raycast(
            screenCenter,
            hits,
            raycastType
        );

        if (!placementPoseValid)
            return;

        placementPose = hits[0].pose;

        // Keep object upright and face the same horizontal
        // direction as the camera.
        Vector3 cameraForward = arCamera.transform.forward;
        cameraForward.y = 0f;

        if (cameraForward.sqrMagnitude > 0.001f)
        {
            placementPose.rotation =
                Quaternion.LookRotation(cameraForward);
        }
    }

    private void UpdateReticle()
    {
        if (reticle == null)
            return;

        reticle.SetActive(placementPoseValid);

        if (placementPoseValid)
        {
            reticle.transform.SetPositionAndRotation(
                placementPose.position,
                placementPose.rotation
            );
        }
    }

    private void PlaceObject()
    {
        if (placedObject != null)
        {
            Destroy(placedObject);
        }

        placedObject = Instantiate(
            placementPrefab,
            placementPose.position,
            placementPose.rotation
        );
    }
}